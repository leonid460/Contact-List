import React from 'react';
import AddButtonWrapper from './__styled-components/AddButtonWrapper';
import { NavLink } from 'react-router-dom';


type AddButtonProps = {
  to: string;
}

const AddButton = ({to}: AddButtonProps) => (
  <AddButtonWrapper as={NavLink} to={to}>+</AddButtonWrapper>
)


export default AddButton;