import { INotification } from 'src/interfaces';

export type NotificationIsReadEditParams = Pick<INotification, 'id' | 'isRead'>;
