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


export default StyledInput;