import * as S from "../../styles/Header";

const Header = ({ title, subTitle }) => {
  return (
    <S.Container className="header-container">
      <h1>{title}</h1>
      <h2>{subTitle}</h2>
    </S.Container>
  );
};

export default Header;
