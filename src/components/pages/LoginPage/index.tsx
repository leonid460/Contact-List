import React from 'react';
import styled from 'styled-components';
import Button from 'components/atoms/Button';
import Input from 'components/atoms/Input';
import Header from 'components/atoms/Header';
import LoginPageTemplate from 'components/templates/LoginPage';
import { Colors } from 'variables';


const SubmitButton = styled(Button)`
  border: none;
  color: white;
  background: ${Colors.Green};

  &:hover {
    background: ${Colors.ShadowedGreen};
  }
`;

const LoginPage = () => {
  return (
    <LoginPageTemplate>
      <Header>Welcome!</Header>
      <Input placeholder='User Name'/>
      <Input placeholder='Password' />
      <SubmitButton type='submit'>Log In</SubmitButton>
    </LoginPageTemplate>
  )
}


export default LoginPage;