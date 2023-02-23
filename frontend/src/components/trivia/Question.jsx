import Card from "../UI/Card";
import * as S from "../../styles/Question";

const Question = ({ text }) => {
  return (
    <Card variant={"title"}>
      <S.text>{text}</S.text>
    </Card>
  );
};

export default Question;
