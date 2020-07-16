import React from 'react';
import styled from 'styled-components';
import TopPanel from 'components/molecules/TopPanel';
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

const ContentContainer = styled.div`
  max-height: calc(100% - ${TopPanelHeight + 15}px);
  height: 100%;
  width: 1300px;
  border-radius: 6px;
  background: white;
`;


const MainPage = ({ children }: { children: React.ReactNode }) => {
  

  return (
    <Wrapper>
      <TopPanel />
      <ContentContainer>
        {children}
      </ContentContainer>
    </Wrapper>
  )
}


export default MainPage;