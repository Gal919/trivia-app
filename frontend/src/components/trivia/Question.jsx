import Card from "../UI/Card";

const Question = ({ text }) => {
  return (
    <Card variant={"title"}>
      <p>{text}</p>
    </Card>
  );
};

export default Question;
