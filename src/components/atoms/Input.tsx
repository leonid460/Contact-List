import React from 'react';
import styled from 'styled-components';
import { Colors } from 'variables';


const StyledInput = styled.input`
  display: inline-block;
  width: 250px;
  padding: 10px;
  border-radius: 6px;
  border: 1px #868585 solid;
  font-size: 16px;

  &:hover {
    background: ${Colors.ShadowedWhite};
  }
`;

export type InputProps = {
  type?: 'text' | 'password';
  value?: string | number;
  placeholder?: string;
  setValue?: Function;
}

const Input = ({ value, setValue, type, placeholder }: InputProps) => (
  <StyledInput
    type={type || 'text'}
    value={value}
    onChange={(event) => setValue && setValue(event.target.value)}
    placeholder={placeholder}
  />
);


export default Input;