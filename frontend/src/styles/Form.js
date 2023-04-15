import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  min-width: 80%;
`;

export const Input = styled.input`
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

export const Label = styled.label`
  margin-top: 10px;
`;

export const Link = {
  textDecoration: "none",
  marginTop: "30px",
  position: "absolute",
  bottom: "0",
  marginBottom: "30px",
};
