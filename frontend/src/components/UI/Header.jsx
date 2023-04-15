import * as S from "../../styles/Header";

const Header = ({ text }) => {
  return (
    <S.Container className="header-container">
      <h1>{text}</h1>
    </S.Container>
  );
};

export default Header;
