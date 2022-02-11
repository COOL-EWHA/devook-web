import { NotificationType } from 'src/types';

export interface INotification {
  id: number;
  type: NotificationType;
  message: string;
  createdAt: string;
  isRead: boolean;
  bookmarkId?: number;
}
