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
        <div className="text-wrapper">
          <h1>Trivia App</h1>
          <i className="fa-solid fa-medal"></i>
        </div>
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
