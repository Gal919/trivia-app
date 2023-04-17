import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../UI/Header";
import { Button } from "../../styles/Button";
import * as S from "../../styles/Form";
import useFetch from "../../hooks/useFetch";

const Signup = () => {
  const [userInfo, setUserInfo] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errorPost, sendPostRequest] = useFetch();

  const handleChange = (e) => {
    e.preventDefault();

    const { name, value } = e.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    sendPostRequest("http://localhost:5000/api/register", "POST", userInfo);
  };

  return (
    <>
      <Header text="Sign Up" />
      <S.Form id="singUpForm" onSubmit={handleSubmit}>
        <S.Label>Username</S.Label>
        <S.Input
          type="text"
          name="username"
          placeholder="Please enter username"
          value={userInfo.username}
          onChange={handleChange}
        />
        <S.Label>Email</S.Label>
        <S.Input
          type="email"
          name="email"
          placeholder="Please enter email"
          value={userInfo.email}
          onChange={handleChange}
        />
        <S.Label>Password</S.Label>
        <S.Input
          type="password"
          name="password"
          placeholder="Please enter password"
          value={userInfo.password}
          onChange={handleChange}
        />
      </S.Form>
      {/* <Link to={"main"} style={S.Link}> */}
      <Button form="singUpForm" type="submit">
        Sign Up{" "}
      </Button>
      {/* </Link> */}
    </>
  );
};

export default Signup;
