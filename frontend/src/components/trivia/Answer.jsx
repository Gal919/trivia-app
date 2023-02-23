import { useEffect, useState } from "react";
import Card from "../UI/Card";

const Answer = ({ text, status, currentQue }) => {
  const [ansStatus, setAnsStatus] = useState("");

  const clickHandler = () => {
    setAnsStatus(status);
  };

  useEffect(() => {
    setAnsStatus("");
  }, [currentQue]);

  return (
    <Card onClick={clickHandler} variant={ansStatus} clickable={true}>
      <p>{text}</p>
    </Card>
  );
};

export default Answer;
