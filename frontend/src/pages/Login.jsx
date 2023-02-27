import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getTriviaData } from "../redux/triviaDataReducer";

const Login = () => {
  const [name, setName] = useState("");

  const dispatch = useDispatch();

  const handleChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleStartClick = () => {
    //dispatch(getTriviaData());
  };

  return (
    <div>
      <input
        onChange={handleChange}
        placeholder="enter name"
        type="text"
        value={name}
      />
      <Link onClick={handleStartClick} to={"main"}>
        Start
      </Link>
    </div>
  );
};

export default Login;
