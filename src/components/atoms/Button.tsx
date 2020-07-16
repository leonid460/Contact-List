import styled from 'styled-components';
import { Colors } from 'variables';


const Button = styled.button`
  border: 1px #868585 solid;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  background: white;
  cursor: pointer;

  &:hover {
    background: ${Colors.ShadowedWhite};
  }
`;


export default Button;