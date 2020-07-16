import React, {useEffect} from 'react';
import {
  Switch,
  Route,
  useHistory
} from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import LoginPage from 'components/pages/LoginPage';
import MainPage from 'components/pages/MainPage';
import CreateOrEditPage from 'components/pages/CreateOrEditContact'
import { useStore } from 'store';

const CreatePage = () => <CreateOrEditPage type='create' />;
const EditPage = () => <CreateOrEditPage type='edit' />;

export default () => {
  useAuthCheck();
  
  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route exact path='/'><MainPage/></Route>
        <Route path='/login'><LoginPage /></Route>
        <Route path='/create'><CreatePage /></Route>
        <Route path='/edit/:id'><EditPage /></Route>
      </Switch>
    </>
  )
}


function useAuthCheck() {
  const { userInfo } = useStore();
  const history = useHistory();
  const isAuthorized = userInfo.username !== '';

  useEffect(() => {
    if (!isAuthorized) {
      history.push('/login');
    }
  }, [history, isAuthorized]);
}
