import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import * as S from "../../styles/Form";
import Button from "../UI/Button";
import Header from "../UI/Header";

const Signup = ({ setIsSignupPage }) => {
  const [userInfo, setUserInfo] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [signupError, setSignupError] = useState("");
  const [formError, setFormError] = useState({});
  const [errorPost, sendPostRequest] = useFetch();
  const navigate = useNavigate();

  useEffect(() => {
    setSignupError("");
  }, [userInfo.email]);

  const handleChange = (e) => {
    e.preventDefault();

    const { name, value } = e.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  const onCreateUser = (data) => {
    if (data.status === "ok") {
      navigate("/trivia");
    } else {
      setSignupError(data.error);
    }
  };

  const validateForm = () => {
    let err = {};

    if (userInfo.username.trim() === "") {
      err.username = "Please enter username";
    }

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
        "http://localhost:5000/api/register",
        "POST",
        userInfo,
        onCreateUser
      );
    }
  };

  const handleLogin = () => {
    setIsSignupPage(false);
  };

  return (
    <>
      <Header title="Sign Up" />
      <S.Form id="singUpForm" onSubmit={handleSubmit}>
        <S.Label>Username</S.Label>
        <S.Input
          type="text"
          name="username"
          placeholder="Please enter username"
          value={userInfo.username}
          onChange={handleChange}
          autoComplete="on"
        />
        <S.Error>{formError.username}</S.Error>
        <S.Label>Email</S.Label>
        <S.Input
          type="email"
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
      {signupError.length > 0 && <p>{signupError}</p>}
      <Button form="singUpForm" type="submit">
        Sign Up
      </Button>
      <S.Link>
        <p>Have an account? </p>
        <p onClick={handleLogin}>Login now</p>
      </S.Link>
    </>
  );
};

export default Signup;
