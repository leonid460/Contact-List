import { UserInfoAction } from './actionType';
import { UserInfo } from './UserInfo';


export default (state: UserInfo, action: UserInfoAction) => {
  switch (action.type) {
    case 'LOG_IN':
      return loginReducer(state, action.payload);

    case 'LOG_OUT':
      return logOutReducer();

    default:
      return state;
  }
}

function loginReducer(state: UserInfo, userInfo: UserInfo | null ): UserInfo {
  return userInfo || state;
}


function logOutReducer(): UserInfo {
  return {
    username: '',
    token: ''
  };
}
