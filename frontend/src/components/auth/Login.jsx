import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import * as S from "../../styles/Form";
import Button from "../UI/Button";
import Header from "../UI/Header";

const Login = ({ setIsSignupPage }) => {
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });
  const [loginError, setLoginError] = useState("");
  const [formError, setFormError] = useState({});
  const [errorPost, sendPostRequest] = useFetch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();

    const { name, value } = e.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    let err = {};

    if (userInfo.email.trim() === "") {
      err.email = "Please enter email";
    }

    if (userInfo.password.trim() === "") {
      err.password = "Please enter password";
    }

    setFormError({ ...err });

    return Object.keys(err).length < 1;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = validateForm();

    if (isValid) {
      sendPostRequest(
        "http://localhost:5000/api/login",
        "POST",
        userInfo,
        saveUserData
      );
    }
  };

  const handleLogin = () => {
    setIsSignupPage(true);
  };

  const saveUserData = (data) => {
    if (data.status === "ok") {
      window.localStorage.setItem("token", data.token);
      navigate("/trivia");
    } else {
      setLoginError(data.error);
    }
  };

  return (
    <>
      <Header text="Login" />
      <S.Form id="loginForm" onSubmit={handleSubmit}>
        <S.Label>email</S.Label>
        <S.Input
          type="text"
          name="email"
          placeholder="Please enter email"
          value={userInfo.email}
          onChange={handleChange}
          autoComplete="on"
        />
        <span>{formError.email}</span>
        <S.Label>Password</S.Label>
        <S.Input
          type="password"
          name="password"
          placeholder="Please enter password"
          value={userInfo.password}
          onChange={handleChange}
          autoComplete="on"
        />
        <span>{formError.password}</span>
      </S.Form>
      <p>Don't have an account?</p>
      {loginError.length > 0 && <p>{loginError}</p>}
      <button onClick={handleLogin}>Sign Up</button>
      <Button form="loginForm" style={S.Button}>
        Start
      </Button>
    </>
  );
};

export default Login;
