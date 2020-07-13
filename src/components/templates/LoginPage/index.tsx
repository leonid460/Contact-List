import React from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  height: 100vh;
  width: 100vw;
`;

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
`;

type LoginPageTemplateProps = {
  children: React.ReactNode
}

const LoginPageTemplate = ({children}: LoginPageTemplateProps) => (
  <Wrapper>
    <FormContainer>
      {children}
    </FormContainer>
  </Wrapper>
)

export default LoginPageTemplate;