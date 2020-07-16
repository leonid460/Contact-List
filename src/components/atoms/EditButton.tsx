import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


const EditButtonWrapper = styled.div`
  padding: 2px;
  border-radius: 6px;
  height: 26px;
  cursor: pointer;

  &:hover {
    background: #adadad;
  }
`;

type EditButtonProps = {
  to: string;
}

const EditButton = ({to}: EditButtonProps) => (
  <EditButtonWrapper as={NavLink} to={to}>
    <span className="material-icons">edit</span>
  </EditButtonWrapper>
)


export default EditButton;