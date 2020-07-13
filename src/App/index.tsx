import React from 'react';
import {
  Switch,
  Route,
  BrowserRouter
} from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import LoginPage from 'components/pages/LoginPage';


export default () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        <Route path='/'><LoginPage/></Route>
      </Switch>
    </BrowserRouter>
  )
}