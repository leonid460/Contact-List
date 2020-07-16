import React from 'react';
import Wrapper from './__styled-components/Wrapper';


type SimpleWindowPage = {
  children: React.ReactNode
}

const SimpleWindowPage = ({children}: SimpleWindowPage) => (
  <Wrapper>
    {children}
  </Wrapper>
)

export default SimpleWindowPage;