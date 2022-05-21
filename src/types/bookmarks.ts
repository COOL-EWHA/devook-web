import { IBookmark, IPost } from 'src/interfaces';
import { PostListFilter, PostListParams } from '.';

export type BookmarkPreview = IPost & Pick<IBookmark, 'dueDate' | 'isRead'>;
export type BookmarkListParams = PostListParams;
export type BookmarkTagListParams = { isBookmarkRead?: boolean };
export type BookmarkListFilter = PostListFilter & Partial<Pick<IBookmark, 'isRead'>>;
export type BookmarkAddParams = { postId: number };
export type BookmarkCreateParams = Pick<IBookmark, 'url' | 'memo'>;
export type BookmarkEditParams = Pick<IBookmark, 'id' | 'memo' | 'dueDate'> & Partial<Pick<IBookmark, 'isRead'>>;
