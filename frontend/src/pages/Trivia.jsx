import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ReactLoading from "react-loading";
import { getTriviaData } from "../redux/triviaDataReducer";
import { getUserResult, insertResult } from "../redux/ResultReducer";
import List from "../components/trivia/List";
import { loadUser } from "../redux/authReducer";
import * as S from "../styles/Trivia";
import { getResultList } from "../redux/ResultListReducer";

const Trivia = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [points, setPoints] = useState(0);
  const userData = useSelector((state) => state.auth.data);
  const { data, loading, success, index, error } = useSelector(
    (state) => state.triviaData
  );

  useEffect(() => {
    dispatch(getTriviaData());
    const token = window.localStorage.getItem("token");
    dispatch(loadUser(token));
  }, [dispatch]);

  useEffect(() => {
    if (!!index && index === data.length) {
      dispatch(
        insertResult({
          email: userData.email,
          name: userData.name,
          score: points,
        })
      );

      // dispatch(getUserResult(userData.email));
      return navigate("/result");
    }
  }, [
    data.length,
    dispatch,
    index,
    navigate,
    points,
    userData.email,
    userData.name,
  ]);

  return (
    <S.Container>
      <h1>Trivia App</h1>
      {loading ? (
        <ReactLoading type="bubbles" color="#ffffff" height={64} width={64} />
      ) : (
        success && (
          <>
            <S.Header>
              <h4>{`User: ${userData.name}`}</h4>
              <p>{`${index + 1} / ${data.length}`}</p>
            </S.Header>
            <List
              data={data}
              index={index}
              error={error}
              setPoints={setPoints}
            />
          </>
        )
      )}
    </S.Container>
  );
};

export default Trivia;
