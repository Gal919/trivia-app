import React, { useState } from "react";
import Login from "../components/auth/Login";
import Signup from "../components/auth/Signup";
import * as S from "../styles/Main";

const Main = () => {
  const [isSignupPage, setIsSignupPage] = useState(false);

  return (
    <S.Container>
      <S.LeftContainer>
        <h1>Welcome To</h1>
        <h1>
          Trivia App
          <i className="fa-solid fa-medal"></i>
        </h1>
      </S.LeftContainer>
      <S.RightContainer>
        {isSignupPage ? (
          <Signup setIsSignupPage={setIsSignupPage} />
        ) : (
          <Login setIsSignupPage={setIsSignupPage} />
        )}
      </S.RightContainer>
    </S.Container>
  );
};

export default Main;
