import React from 'react';
import { NavLink } from 'react-router-dom';
import EditButtonWrapper from './__styled-components/EditButtonWrapper';


type EditButtonProps = {
  to: string;
}

const EditButton = ({to}: EditButtonProps) => (
  <EditButtonWrapper as={NavLink} to={to}>
    <span className="material-icons">edit</span>
  </EditButtonWrapper>
)


export default EditButton;