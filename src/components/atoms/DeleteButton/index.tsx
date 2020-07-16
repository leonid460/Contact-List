import React from 'react';
import ButtonWrapper from './__styled-components/ButtonWrapper';


type OnClick = ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined;

const DeleteButton = ({onClick}: {onClick?: OnClick}) => (
  <ButtonWrapper onClick={onClick}>
    <span className="material-icons">delete</span>
  </ButtonWrapper>
);


export default DeleteButton;