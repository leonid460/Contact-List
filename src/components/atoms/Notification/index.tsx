import React from 'react';
import NotificationContainer from './__styled-components/NotificationContainer';
import { NotificationMessage } from 'types';


const Notification = ({content, onClick, type}: NotificationMessage & {onClick: Function}) => {
  return (
    <NotificationContainer onClick={() => onClick()} type={type}>
      {content}
    </NotificationContainer>
  );
}


export default Notification;