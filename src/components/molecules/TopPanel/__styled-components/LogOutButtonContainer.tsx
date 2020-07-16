import styled from 'styled-components';
import Button from 'components/atoms/Button';
import { Colors } from 'variables';


const LogOutButtonContainer = styled(Button)`
  background: ${Colors.Red};
  color: white;
  border: none;
  margin-right: 15px;
  font-weight: 600;

  &:hover {
    background: ${Colors.ShadowedRed};
  }
`;


export default LogOutButtonContainer;