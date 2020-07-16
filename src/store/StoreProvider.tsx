import React from 'react';

import { UserInfo } from 'store/UserInfo/UserInfo';
import { UserInfoAction } from 'store/UserInfo/actionType';
import { useUserInfoStore } from 'store/UserInfo';


type IContext = {
  userInfo: UserInfo,
  userInfoDispatch: React.Dispatch<UserInfoAction>
}

export const StoreContext = React.createContext<IContext | null>(null);

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const [userInfo, userInfoDispatch] = useUserInfoStore();

  const contextValue = {
    userInfo, userInfoDispatch,
  }

  return <StoreContext.Provider value={contextValue}>
    {children}
  </StoreContext.Provider>
}
