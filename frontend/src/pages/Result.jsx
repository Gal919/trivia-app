import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserResult } from "../redux/ResultReducer";
import { getResultList } from "../redux/ResultListReducer";
import { createId } from "../components/trivia/utils";
import { loadUser } from "../redux/authReducer";

const Result = () => {
  const { email } = useSelector((state) => state.auth.data);
  const { resultStatus, score } = useSelector((state) => state.result);
  const { resultListStatus, resultList } = useSelector(
    (state) => state.resultList
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    dispatch(loadUser(token));

    if (email) {
      dispatch(getUserResult(email));
      dispatch(getResultList());
    }
  }, [dispatch, email]);

  return (
    <div>
      {resultStatus === "pending" ? (
        <p>loading</p>
      ) : (
        resultStatus === "success" &&
        resultListStatus === "success" && (
          <>
            <p>Yoyr Score is: {score}</p>
            {resultList?.map((result) => (
              <div key={createId()}>
                <p>{result.name}</p>
                <p>{result.highestScore}</p>
              </div>
            ))}
          </>
        )
      )}
    </div>
  );
};

export default Result;
