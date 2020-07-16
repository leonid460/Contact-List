import React from 'react';
import { useStore } from 'store';
import { logout } from 'store/UserInfo/actions';
import Avatar from 'components/atoms/Avatar';
import LogOutButtonContainer from './__styled-components/LogOutButtonContainer';
import TopPanelWrapper from './__styled-components/TopPanelWrapper';


const TopPanel = () => {
  const { userInfoDispatch } = useStore();
  const { userInfo } = useStore();
  const username = userInfo.username;

  const handleLogOut = () => {
    userInfoDispatch(logout());
  }

  return (
    <TopPanelWrapper>
      <Avatar>
        { username && username}
      </Avatar>
      <LogOutButtonContainer onClick={handleLogOut}>Log Out</LogOutButtonContainer>
    </TopPanelWrapper>
  );
}


export default TopPanel;