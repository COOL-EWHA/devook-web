import { INotification } from 'src/interfaces';

export type NotificationEditParams = Pick<INotification, 'id' | 'isRead'>;
export type NotificationType = 'due-date' | 'to-read' | 'no-bookmarks';
