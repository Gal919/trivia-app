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
  padding-top: 20px;

  .text-wrapper {
    display: flex;
    align-items: center;
    margin-top: 20px;

    h1 {
      font-size: 40px;

      &:last-of-type {
        margin-left: 60px;
      }
    }

    i {
      font-size: 30px;
      margin: 10px 0 0 10px;
    }
  }

  h1 {
    font-size: 40px;
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
