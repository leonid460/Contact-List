import styled from 'styled-components';
import { TopPanelHeight } from 'variables';


const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  max-height: 100vh;
  box-sizing: border-box;
  padding: 15px;
  padding-top: ${TopPanelHeight + 15}px;
`;


export default Wrapper;