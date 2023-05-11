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

  const handleSignup = () => {
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
      <Header title="Login" />
      <S.Form id="loginForm" onSubmit={handleSubmit}>
        <S.Label>Email</S.Label>
        <S.Input
          type="text"
          name="email"
          placeholder="Please enter email"
          value={userInfo.email}
          onChange={handleChange}
          autoComplete="on"
        />
        <S.Error>{formError.email}</S.Error>
        <S.Label>Password</S.Label>
        <S.Input
          type="password"
          name="password"
          placeholder="Please enter password"
          value={userInfo.password}
          onChange={handleChange}
          autoComplete="on"
        />
        <S.Error>{formError.password}</S.Error>
      </S.Form>
      {loginError.length > 0 && <p>{loginError}</p>}
      <Button form="loginForm" style={S.Button}>
        Start
      </Button>
      <S.Link>
        <p>Don't have an account?</p>
        <p onClick={handleSignup}>Sign Up</p>
      </S.Link>
    </>
  );
};

export default Login;
