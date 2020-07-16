import styled from 'styled-components';
import Button from 'components/atoms/Button';
import { Colors } from 'variables';


const SubmitButton = styled(Button)`
  border: none;
  color: white;
  background: ${Colors.Green};

  &:hover {
    background: ${Colors.ShadowedGreen};
  }
`;


export default SubmitButton;