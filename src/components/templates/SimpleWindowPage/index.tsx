import React from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

type SimpleWindowPage = {
  children: React.ReactNode
}

const SimpleWindowPage = ({children}: SimpleWindowPage) => (
  <Wrapper>
    {children}
  </Wrapper>
)

export default SimpleWindowPage;