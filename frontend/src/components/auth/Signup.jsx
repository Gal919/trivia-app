import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../redux/authReducer";
import * as S from "../../styles/Form";
import Button from "../UI/Button";
import Header from "../UI/Header";
import { validateForm } from "./utils";

const Signup = ({ setIsSignupPage }) => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [formError, setFormError] = useState({});
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    e.preventDefault();

    const { name, value } = e.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = validateForm(userInfo, setFormError);

    if (isValid) {
      dispatch(registerUser(userInfo));
      if (auth.registerStatus === "success") {
        window.localStorage.setItem("token", auth.token);
        navigate("/trivia");
      }
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
          name="name"
          placeholder="Please enter username"
          value={userInfo.name}
          onChange={handleChange}
          autoComplete="on"
        />
        <S.Error>{formError.name}</S.Error>
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
      {auth.registerStatus === "rejected" ? (
        <S.Error>{auth.registerError.error}</S.Error>
      ) : null}
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
