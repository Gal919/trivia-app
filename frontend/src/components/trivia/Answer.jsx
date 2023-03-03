import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateIndex } from "../../redux/triviaDataReducer";
import Card from "../UI/Card";

const Answer = ({ text, status, currentQue, updateStatus, id, clickable }) => {
  const [ansStatus, setAnsStatus] = useState("");
  const dispatch = useDispatch();

  const clickHandler = () => {
    updateStatus(id);

    setTimeout(() => {
      dispatch(updateIndex());
    }, 1000);
  };

  useEffect(() => {
    setAnsStatus(status);
  }, [status]);

  useEffect(() => {}, [currentQue]);

  return (
    <Card onClick={clickHandler} variant={ansStatus} clickable={clickable}>
      <p>{text}</p>
    </Card>
  );
};

export default Answer;
