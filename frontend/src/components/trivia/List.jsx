import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactLoading from "react-loading";
import { getTriviaData } from "../../redux/triviaDataReducer";
import * as S from "../../styles/List";
import Question from "./Question";
import Answer from "./Answer";

const List = () => {
  const [questionsList, setQuestionsList] = useState({});
  const { data, loading, success, error } = useSelector(
    (state) => state.triviaData
  );
  const queIndex = useSelector((state) => state.triviaData.index);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTriviaData());
  }, [dispatch]);

  const createAnsArr = useCallback((incorrectAns, correctAns) => {
    const incorrectAnsObj = incorrectAns.map((ans) => ({
      id: createId(),
      value: ans,
      isCorrect: false,
      status: null,
      clickable: true,
    }));
    const correctAnsObj = {
      id: createId(),
      value: correctAns,
      isCorrect: true,
      status: null,
      clickable: true,
    };

    return [...incorrectAnsObj, correctAnsObj];
  }, []);

  useEffect(() => {
    if (success) {
      const ansArr = shuffleAns(
        createAnsArr(
          data[queIndex].incorrectAnswers,
          data[queIndex].correctAnswer
        )
      );

      setQuestionsList({
        question: data[queIndex].question,
        answers: [...ansArr],
      });
    }
  }, [success, data, queIndex, createAnsArr]);

  const createId = () => {
    return Math.floor(Math.random() * 100000);
  };

  const shuffleAns = (arr) => {
    arr.sort(() => Math.random() - 0.5);
    return arr;
  };

  const updateCellStatus = (id) => {
    console.log(id);
    const updatedList = { ...questionsList };
    updatedList.answers.forEach((ans) => {
      if (ans.id === id) {
        ans.isCorrect ? (ans.status = "correct") : (ans.status = "incorrect");
        ans.clickable = false;
      } else {
        ans.status = "disabled";
        ans.clickable = false;
      }
    });
    console.log(updatedList);
    setQuestionsList(updatedList);
  };

  return (
    <S.Container>
      {loading ? (
        <ReactLoading type="bubbles" color="#ffffff" height={64} width={64} />
      ) : (
        <>
          {questionsList?.question && (
            <Question text={questionsList.question} />
          )}
          {questionsList?.answers?.length > 0 &&
            questionsList.answers.map((ans) => (
              <Answer
                key={ans.id}
                id={ans.id}
                text={ans.value}
                status={ans.status}
                currentQue={queIndex}
                clickable={ans.clickable}
                updateStatus={updateCellStatus}
              />
            ))}
        </>
      )}
    </S.Container>
  );
};

export default List;
