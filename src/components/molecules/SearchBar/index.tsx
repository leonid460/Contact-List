import React, { useState } from 'react';
import styled from 'styled-components';
import Input from 'components/atoms/Input';
import Button from 'components/atoms/Button';


const Wrapper = styled.div`
  display: flex;
  padding: 10px;
  
`;

const StyledButton = styled(Button)`
  margin-left: 10px;
  padding: 0 10px;
  box-sizing: border-box;
  font-size: 20px;
  font-weight: bold;
  font-family: 'Material Icons';
`;

type SearchBarProps = {
  value: string;
  setValue: Function;
  setMode: Function
}

const SearchBar = ({ value, setValue, setMode }: SearchBarProps) => {
  const [inputValue, setInputValue] = useState('');

  const onButtonClick = () => {
    if (inputValue !== '') {
      setValue(inputValue);
      setMode('search');
    } else {
      setMode('all');
    }
  }

  return (
    <Wrapper>
      <Input
        placeholder='Search'
        value={inputValue}
        setValue={setInputValue}
      />
      <StyledButton onClick={() => onButtonClick()}>
        search
      </StyledButton>
    </Wrapper>
  )
}


export default SearchBar;