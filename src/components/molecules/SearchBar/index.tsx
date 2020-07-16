import React, { useState } from 'react';
import Input from 'components/atoms/Input';
import Wrapper from './__styled-components/Wrapper';
import StyledButton from './__styled-components/StyledButton';


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