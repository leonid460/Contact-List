import React from 'react';
import TopPanel from 'components/molecules/TopPanel';
import ContentContainer from './__styled-components/ContentContainer';
import Wrapper from './__styled-components/Wrapper';


const MainPage = ({ children }: { children: React.ReactNode }) => (
  <Wrapper>
    <TopPanel />
    <ContentContainer>
      {children}
    </ContentContainer>
  </Wrapper>
)


export default MainPage;