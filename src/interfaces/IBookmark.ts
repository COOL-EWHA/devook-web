import { IPost } from '.';

export interface IBookmark extends IPost {
  createdAt: Date;
  memo?: string;
  dueDate?: string;
  isRead: boolean;
}
