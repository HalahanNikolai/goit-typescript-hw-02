import React from "react";
import { ButtonLoadMore } from "./Button,styled";

interface ButtonProps {
  onClick: () => void;
}
// : React.FC<{ onClick: () => void }>
// function Button(props: { onClick: () => void }) {
function Button({ onClick }) {
  return (
    <ButtonLoadMore type="button" onClick={onClick}>
      Load More
    </ButtonLoadMore>
  );
}
export default Button;
