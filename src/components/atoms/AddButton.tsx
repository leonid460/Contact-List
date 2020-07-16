import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


const AddButtonWrapper = styled.button`
  width: 40px;
  height: 40px;
  
  margin-right: 10px;
  box-sizing: border-box;
  border: none;
  border-radius: 5px;

  background: #3399FF;
  color: white;
  font-weight: bold;
  font-size: 30px;
  text-decoration: none;
  text-align: center;
  cursor: pointer;

  &:hover {
    background: #2481DD;
  }
`;


const AddButton = () => (
  <AddButtonWrapper as={NavLink} to='/create' >+</AddButtonWrapper>
)


export default AddButton;