import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateIndex } from "../../redux/triviaDataReducer";
import Card from "../UI/Card";

const Answer = ({ text, status, currentQue }) => {
  const [ansStatus, setAnsStatus] = useState("");
  const dispatch = useDispatch();

  const clickHandler = () => {
    setAnsStatus(status);
    setTimeout(() => {
      dispatch(updateIndex());
    }, 1000);
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
