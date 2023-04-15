import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 40px;
  height: 100vh;
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  overflow-wrap: anywhere;

  h1 {
    font-size: 40px;
    margin-bottom: 20px;

    &:last-of-type {
      margin-left: 60px;
    }

    i {
      font-size: 35px;
      margin-left: 10px;
    }
  }
`;

export const RightContainer = styled.div`
  display: flex;
  width: 50%;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  border: 1px solid #777478;
  border-radius: 20px;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  min-width: 80%;
`;

export const LoginInput = styled.input`
  height: 40px;
  margin-top: 10px;
  border: 1px solid #777478;
  border-radius: 50px;
  font-size: 17px;
  padding: 5px 15px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

  &:focus,
  &:hover {
    outline: 2.5px solid #4c87d6;
  }
`;

export const LoginLabel = styled.label`
  margin-top: 10px;
`;

export const LoginLink = {
  textDecoration: "none",
  marginTop: "30px",
};
