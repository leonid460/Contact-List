import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Input from 'components/atoms/Input';
import Header from 'components/atoms/Header';
import FormContainer from 'components/atoms/FormContainer';
import SubmitButton from 'components/atoms/SubmitFormButton';
import SimpleWindowPage from 'components/templates/SimpleWindowPage';
import { useStore } from 'store';
import { login } from 'store/UserInfo/actions';
import { auth } from 'services/auth';


const LoginPage = () => {
  const { userInfoDispatch } = useStore();
  const history = useHistory()
  const [username, setUsername] = useState('GW');
  const [password, setPassword] = useState('lalilulelo');
  
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    try {
      const token = await auth(username, password);
      userInfoDispatch(login({username, token}));
      history.push('/');
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <SimpleWindowPage>
      <FormContainer onSubmit={onSubmit}>
        <Header>Welcome!</Header>
        <Input
          value={username}
          setValue={setUsername}
          placeholder='User Name'
        />
        <Input
          type='password'
          value={password}
          setValue={setPassword}
          placeholder='Password'
        />
        <SubmitButton type='submit'>Log In</SubmitButton>
      </FormContainer>
    </SimpleWindowPage>
  )
}


export default LoginPage;