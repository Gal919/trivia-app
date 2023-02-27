import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTriviaData } from "../../redux/triviaDataReducer";
import * as S from "../../styles/List";
import Question from "./Question";
import Answer from "./Answer";

const List = () => {
  const { data, loading, success, error } = useSelector(
    (state) => state.triviaData
  );
  const queIndex = useSelector((state) => state.triviaData.index);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTriviaData());
  }, []);

  const createAnsArr = (incorrectAns, correctAns) => {
    const incorrectAnsObj = incorrectAns.map((ans) => ({
      id: createId(),
      value: ans,
      isCorrect: false,
    }));
    const correctAnsObj = {
      id: createId(),
      value: correctAns,
      isCorrect: true,
    };

    return [...incorrectAnsObj, correctAnsObj];
  };

  const createId = () => {
    return Math.floor(Math.random() * 100000);
  };

  const shuffleAns = (arr) => {
    arr.sort(() => Math.random() - 0.5);
    return arr;
  };

  return (
    <S.Container>
      {loading ? (
        <p style={{ color: "white" }}>loading...</p>
      ) : (
        <>
          {success && <Question text={data?.[queIndex]?.question} />}
          {success &&
            shuffleAns(
              createAnsArr(
                data[queIndex].incorrectAnswers,
                data[queIndex].correctAnswer
              )
            ).map((ans) => (
              <Answer
                key={ans.id}
                text={ans.value}
                status={ans.isCorrect ? "correct" : "incorrect"}
                currentQue={queIndex}
              />
            ))}
        </>
      )}
    </S.Container>
  );
};

export default List;
