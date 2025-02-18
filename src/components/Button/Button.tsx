import React from "react";
import { ButtonLoadMore } from "./Button,styled";

interface ButtonProps {
  onClick: () => void;
}
// : React.FC<{ onClick: () => void }>
const Button: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <ButtonLoadMore type="button" onClick={onClick}>
      Load More
    </ButtonLoadMore>
  );
};

export default Button;
