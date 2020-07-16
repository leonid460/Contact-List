import { useReducer } from 'react';
import reducer from './reducer';
import { UserInfo } from './UserInfo';


const initState: UserInfo = {
  username: '',
  token: ''
}

export const useUserInfoStore = () => {
  return useReducer(reducer, initState);
}
