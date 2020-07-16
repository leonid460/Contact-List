import styled from 'styled-components';
import { ContactsTableParams } from 'variables';


const ContactRowWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin: ${ContactsTableParams.rowMargin}px;
  border-radius: 5px;
  animation: appear 0.5s ease;
  background: #EDEDED;
`;


export default ContactRowWrapper;