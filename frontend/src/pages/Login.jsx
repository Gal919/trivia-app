import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/UI/Header";
import { Button } from "../styles/Button";
import * as S from "../styles/Login";

const Login = () => {
  const [userInfo, setUserInfo] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    e.preventDefault();

    const { name, value } = e.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

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
        <Header text="Login" />
        <S.LoginForm>
          <S.LoginLabel>Username</S.LoginLabel>
          <S.LoginInput
            type="text"
            name="username"
            placeholder="Please enter username"
            value={userInfo.username}
            onChange={handleChange}
          />
          <S.LoginLabel>Password</S.LoginLabel>
          <S.LoginInput
            type="password"
            name="password"
            placeholder="Please enter password"
            value={userInfo.password}
            onChange={handleChange}
          />
        </S.LoginForm>
        <Link to={"main"} style={S.LoginLink}>
          <Button>Start</Button>
        </Link>
      </S.RightContainer>
    </S.Container>
  );
};

export default Login;
