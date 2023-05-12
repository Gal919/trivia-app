import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/authReducer";
import * as S from "../../styles/Form";
import Button from "../UI/Button";
import Header from "../UI/Header";
import { validateForm } from "./utils";

const Login = ({ setIsSignupPage }) => {
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });
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
      dispatch(loginUser(userInfo));
      if (auth.loginStatus === "success") {
        window.localStorage.setItem("token", auth.token);
        navigate("/trivia");
      }
    }
  };

  const handleSignup = () => {
    setIsSignupPage(true);
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
      {auth.loginStatus === "rejected" ? (
        <S.Error>{auth.loginError.error}</S.Error>
      ) : null}
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
