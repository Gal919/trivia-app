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
  position: relative;
`;
