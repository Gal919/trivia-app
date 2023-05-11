import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  position: relative;
  flex-direction: column;
  min-width: 80%;
`;

export const Link = styled.div`
  display: flex;
  position: absolute;
  margin-bottom: 20px;
  bottom: 0;

  p:last-child {
    margin-left: 10px;
    text-decoration: underline;
    color: #4c87d6;
    font-weight: bold;
    cursor: pointer;
  }
`;

export const Error = styled.span`
  font-size: 14px;
  color: #f03c2a;
  margin: 5px 0 0 7px;
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

export const Button = {
  marginTop: "30px",
  position: "absolute",
  bottom: "0",
  marginBottom: "30px",
};
