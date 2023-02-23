import * as S from "../../styles/Button";

const Button = ({ className, onClick, children }) => {
  return (
    <S.Container>
      <S.Button
        className={className ? `btn ${className}` : "btn"}
        onClick={onClick}
      >
        {children}
      </S.Button>
    </S.Container>
  );
};

export default Button;
