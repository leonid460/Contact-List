import styled from 'styled-components';


const ButtonWrapper = styled.button`
  width: 40px;
  height: 40px;
  box-sizing: border-box;
  border: none;
  border-radius: 5px;
  background: #FF9999;
  cursor: pointer;
  animation: appear 0.5s ease;
  transition: all .5s ease;

  &:hover {
    background: #EA8B8B;
  }
`;


export default ButtonWrapper;