import { IBookmarkPost } from 'src/interfaces';

export type BookmarkPostPreview = Pick<IBookmarkPost, 'id' | 'title' | 'thumbnail' | 'description' | 'url' | 'tags'>;
export type CreateBookmarkParams = Pick<IBookmarkPost, 'url' | 'memo'>;
export type BookmarkId = Pick<IBookmarkPost, 'id'>;
