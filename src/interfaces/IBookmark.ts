import { IPost } from '.';

export interface IBookmark extends IPost {
  createdAt: string;
  memo?: string;
  dueDate?: string;
  isRead: boolean;
}
