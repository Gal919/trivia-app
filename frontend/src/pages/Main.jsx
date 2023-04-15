import React from "react";
import Login from "../components/auth/Login";
import Signup from "../components/auth/Signup";
import * as S from "../styles/Main";

const Main = () => {
  return (
    <S.Container>
      <S.LeftContainer>
        <h1>Welcome To</h1>
        <h1>
          Trivia App
          <i className="fa-solid fa-medal"></i>
        </h1>
      </S.LeftContainer>
      <S.RightContainer>{true ? <Signup /> : <Login />}</S.RightContainer>
    </S.Container>
  );
};

export default Main;
