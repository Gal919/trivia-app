import React from "react";
import Header from "../components/UI/Header";
import List from "../components/trivia/List";

const Trivia = () => {
  return (
    <div>
      <Header text="Trivia App" />
      <List />
    </div>
  );
};

export default Trivia;
