import styled from 'styled-components';
import { BoxShadow } from 'variables';


const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 400px;
  height: 322px;
  padding: 24px 10px;
  border-radius: 8px;
  background: white;
  box-shadow: ${BoxShadow};
  
  animation: slide-up 0.5s ease;
`;


export default FormContainer;