import React from 'react';
import styled from 'styled-components';


const ButtonWrapper = styled.button`
  width: 40px;
  height: 40px;
  box-sizing: border-box;
  border: none;
  border-radius: 5px;
  background: #FF9999;
  cursor: pointer;

  &:hover {
    background: #EA8B8B;
  }
`;

type OnClick = ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined;

const DeleteButton = ({onClick}: {onClick?: OnClick}) => (
  <ButtonWrapper onClick={onClick}>
    <span className="material-icons">delete</span>
  </ButtonWrapper>
);


export default DeleteButton;