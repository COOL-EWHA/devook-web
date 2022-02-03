import { IBookmark } from 'src/interfaces';
import { PostListFilter, PostListParams, PostPreview } from '.';

export type BookmarkPreview = PostPreview & Pick<IBookmark, 'dueDate' | 'isRead'>;
export type BookmarkListParams = PostListParams;
export type BookmarkTagListParams = { isBookmarkRead?: boolean };
export type BookmarkListFilter = PostListFilter;
export type BookmarkAddParams = { postId: number };
export type BookmarkCreateParams = Pick<IBookmark, 'url' | 'memo'>;
export type BookmarkMemoEditParams = Pick<IBookmark, 'id' | 'memo' | 'dueDate'> & Partial<Pick<IBookmark, 'isRead'>>;
