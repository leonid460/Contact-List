import React from 'react';
import StyledInput from './__styled-components/StyledInput';


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