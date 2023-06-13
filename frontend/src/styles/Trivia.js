import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 40px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  align-items: center;

  h1 {
    margin-bottom: 40px;
  }
`;

export const SubHeader = styled.div`
  display: flex;
  flex-direction: column;
  width: inherit;
  padding: 0 10px;

  h4 {
    margin-bottom: 5px;
  }
`;
