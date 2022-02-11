export interface INotification {
  id: number;
  message: string;
  createdAt: string;
  isRead: boolean;
  bookmarkId?: number;
}
