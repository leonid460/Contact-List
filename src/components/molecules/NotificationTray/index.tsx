import React, { useEffect, useState, useCallback } from 'react';
import Portal from './Portal';
import TrayContainer from './__styled-components/TrayContainer';
import Notification from 'components/atoms/Notification';
import { NotificationMessage } from 'types';
import { eventEmitter } from 'utils/eventEmitter';


export const notificationEvent = 'event-notification';

const NotificationTray = () => {
  const [messages, setMessages] = useState<NotificationMessage[]>([]);

  const closeNotification = useCallback((index: number) => {
    setMessages([...messages.slice(0, index), ...messages.slice(index + 1)]);
  }, [messages]);

  const onClick = (index: number) => {
    closeNotification(index);
  }

  useEffect(() => {
    const unsubscribe = eventEmitter.subscribe<NotificationMessage>(notificationEvent, (data) => {
      setMessages([...messages, data]);
    });

    return () => {
      unsubscribe();
    }
  });

  useEffect(() => { 
    const timer = setTimeout(() => { 
      closeNotification(0);
    }, 10000);

    return () => clearTimeout(timer);
  }, [closeNotification, messages]);

  return (
    <Portal>
      <TrayContainer>
        {
          messages.map((msg, index) => (
            <Notification
              {...msg}
              key={index}
              onClick={() => onClick(index)}
            />
          ))
        }
      </TrayContainer>  
    </Portal>
  )
}


export default NotificationTray;