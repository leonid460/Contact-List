import { UserInfo } from './UserInfo';


export type UserInfoAction = {
  type: 'LOG_IN'
  | 'LOG_OUT'
  payload: UserInfo | null
}
