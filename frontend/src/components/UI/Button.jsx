import * as S from "../../styles/Button";

const Button = ({ className, onClick, form, type, children }) => {
  return (
    <S.Container>
      <S.Button
        className={className ? `btn ${className}` : "btn"}
        onClick={onClick}
        form={form}
        type={type}
      >
        {children}
      </S.Button>
    </S.Container>
  );
};

export default Button;
