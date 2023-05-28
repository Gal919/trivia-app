import React, { useState, useEffect, useCallback } from "react";
import * as S from "../../styles/List";
import Question from "./Question";
import Answer from "./Answer";
import { createId, shuffleAns } from "./utils";

const List = ({ data, index, error, setPoints }) => {
  const [questionsList, setQuestionsList] = useState({});

  useEffect(() => {
    updateNextQue();
  }, []);

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

  const updateNextQue = () => {
    const ansArr = shuffleAns(
      createAnsArr(data[index].incorrectAnswers, data[index].correctAnswer)
    );

    setQuestionsList({
      question: data[index].question,
      answers: [...ansArr],
    });
  };

  const updateCellStatus = (id) => {
    const updatedList = { ...questionsList };
    updatedList.answers.forEach((ans) => {
      if (ans.id === id) {
        if (ans.isCorrect) {
          setPoints((prev) => prev + 1);
          ans.status = "correct";
        } else {
          ans.status = "incorrect";
        }
      } else {
        ans.status = "disabled";
      }
      ans.clickable = false;
    });
    setQuestionsList(updatedList);
  };

  return (
    <S.Container>
      {questionsList?.question && <Question text={questionsList.question} />}
      {questionsList?.answers?.length > 0 &&
        questionsList.answers.map((ans) => (
          <Answer
            key={ans.id}
            id={ans.id}
            text={ans.value}
            status={ans.status}
            currentQue={index}
            clickable={ans.clickable}
            updateStatus={updateCellStatus}
            updateNextQue={updateNextQue}
          />
        ))}
    </S.Container>
  );
};

export default List;
