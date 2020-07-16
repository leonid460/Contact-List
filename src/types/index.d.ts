export type Contact = {
  id: number;
  name: string;
  company: string;
  phone: string;
}

export type NotificationMessage = {
  content: string;
  type?: NotificationType
}

export type NotificationType = 'info' | 'error';