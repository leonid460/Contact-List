import { eventEmitter } from 'utils/eventEmitter';
import { notificationEvent } from 'components/molecules/NotificationTray';
import { NotificationMessage } from 'types';


export function callNotification(data: NotificationMessage) {
  eventEmitter.emit<NotificationMessage>(notificationEvent, data);
}