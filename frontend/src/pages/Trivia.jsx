import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ReactLoading from "react-loading";
import { getTriviaData } from "../redux/triviaDataReducer";
import { insertResult } from "../redux/ResultReducer";
import List from "../components/trivia/List";
import { loadUser } from "../redux/authReducer";
import * as S from "../styles/Trivia";

const Trivia = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [points, setPoints] = useState(0);
  const userData = useSelector((state) => state.auth.data);
  const { data, loading, dataSuccess, index, error } = useSelector(
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
      {loading ? (
        <ReactLoading type="bubbles" color="#ffffff" height={64} width={64} />
      ) : (
        dataSuccess && (
          <>
            <S.Header>
              <h1>Trivia App</h1>
              <S.SubHeader>
                <h4>{`User: ${userData.name}`}</h4>
                <p>{`Question: ${index + 1} / ${data.length}`}</p>
              </S.SubHeader>
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
