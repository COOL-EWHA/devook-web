import { IPost } from '.';

export interface IBookmark extends IPost {
  createdAt: Date;
  memo?: string;
  dueDate?: Date;
  isRead?: boolean;
}
