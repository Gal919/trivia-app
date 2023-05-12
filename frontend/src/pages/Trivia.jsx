import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/UI/Header";
import List from "../components/trivia/List";
import { loadUser } from "../redux/authReducer";

const Trivia = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.auth.data);

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    dispatch(loadUser(token));
  }, []);

  return (
    <div>
      <Header title="Trivia App" subTitle={userData.name} />
      <List />
    </div>
  );
};

export default Trivia;
