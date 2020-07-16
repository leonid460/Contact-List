import styled from 'styled-components';
import { TopPanelHeight } from 'variables';


const TopPanelWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: ${TopPanelHeight}px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background: white;
`;


export default TopPanelWrapper;