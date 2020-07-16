import styled from 'styled-components';
import { TopPanelHeight } from 'variables';


const ContentContainer = styled.div`
  max-height: calc(100% - ${TopPanelHeight + 15}px);
  height: 100%;
  width: 1300px;
  border-radius: 6px;
  background: white;
`;


export default ContentContainer;