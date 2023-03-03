import styled from "styled-components";

export const Card = styled.div`
  margin: 5px;
  padding: 10px;
  max-width: 70%;
  min-width: 70%;
  text-align: center;
  font-size: 20px;
  border-radius: 12px;
  color: ${(props) => (props.variant === "disabled" ? "#777478" : "#ffffff")};
  background-color: #28313b;
  border: 2px solid
    ${(props) =>
      props.variant === "title"
        ? "#ffffff"
        : props.variant === "correct"
        ? "#4cc307"
        : props.variant === "incorrect"
        ? "#e92c03"
        : "#777478"};
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  cursor: ${(props) => (props.clickable ? "pointer" : "auto")};
  pointer-events: ${(props) => (props.clickable ? "auto" : "none")};

  &:hover {
    transform: ${(props) => (props.clickable ? "scale(1.01)" : "none")};
  }
`;
