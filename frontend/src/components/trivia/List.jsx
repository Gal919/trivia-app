import { useState } from "react";
import Button from "../UI/Button";
import Question from "./Question";
import Answer from "./Answer";
import * as S from "../../styles/List";

const List = ({ data }) => {
  const [currentQue, setCurrentQue] = useState(0);

  const clickHandler = () => {
    if (data[currentQue].incorrectAnswers.length + 1 === currentQue) {
      setCurrentQue(0);
    } else {
      setCurrentQue(currentQue + 1);
    }
  };

  const shuffleAns = (incorrectAns, correctAns) => {
    const incorrectWithKey = incorrectAns.map((v) => ({ v, isCorrect: false }));
    const correctWithKey = { v: correctAns, isCorrect: true };
    let ansArr = [];
    ansArr = [...incorrectWithKey, correctWithKey];

    ansArr.sort(() => Math.random() - 0.5);
    return ansArr;
  };

  return (
    <S.Container>
      <Question text={data[currentQue].question} />
      {shuffleAns(
        data[currentQue].incorrectAnswers,
        data[currentQue].correctAnswer
      ).map((ans) => (
        <Answer
          text={ans.v}
          status={ans.isCorrect ? "correct" : "incorrect"}
          currentQue={currentQue}
        />
      ))}
      <Button onClick={clickHandler}>Next</Button>
    </S.Container>
  );
};

export default List;
