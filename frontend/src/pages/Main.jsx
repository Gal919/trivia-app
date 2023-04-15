import React from "react";
import Header from "../components/UI/Header";
import List from "../components/trivia/List";

const Main = () => {
  return (
    <div>
      <Header text="Trivia App" />
      <List />
    </div>
  );
};

export default Main;
