import * as S from "../../styles/Card";

const Card = ({ className, variant, clickable, onClick, children }) => {
  return (
    <S.Card
      className={className ? `card ${className}` : "card"}
      variant={variant}
      clickable={clickable}
      onClick={onClick}
    >
      {children}
    </S.Card>
  );
};

export default Card;
