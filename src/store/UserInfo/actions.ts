import { UserInfoAction } from './actionType';
import { UserInfo } from './UserInfo';


export const login = (userInfo: UserInfo): UserInfoAction => ({
  type: 'LOG_IN',
  payload: userInfo
})

export const logout = (): UserInfoAction => ({
  type: 'LOG_OUT',
  payload: null
});
