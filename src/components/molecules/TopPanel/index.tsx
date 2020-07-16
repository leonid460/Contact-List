import React from 'react';
import styled from 'styled-components';
import { useStore } from 'store';
import { logout } from 'store/UserInfo/actions';
import Avatar from 'components/atoms/Avatar';
import Button from 'components/atoms/Button';
import { TopPanelHeight } from 'variables';


const TopPanelWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: ${TopPanelHeight}px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background: white;
`;

const LogOutButton = styled(Button)`
  background: #F8CECC;
  color: white;
  border: none;
  margin-right: 15px;
  font-weight: 600;

  &:hover {
    background: #E3BEBC;
  }
`;

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
      <LogOutButton onClick={handleLogOut}>Log Out</LogOutButton>
    </TopPanelWrapper>
  );
}


export default TopPanel;