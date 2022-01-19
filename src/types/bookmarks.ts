import { IBookmark } from 'src/interfaces';

export type BookmarkPreview = Pick<IBookmark, 'id' | 'title' | 'thumbnail' | 'description' | 'url' | 'tags'>;
export type BookmarkCreateBody = Pick<IBookmark, 'url' | 'memo'>;
export type BookmarkDeleteParams = Pick<IBookmark, 'id'>;
export type BookmarkListQuery = {
  cursor?: number;
  limit?: number;
};
export type BookmarkListQueries = BookmarkListQuery & Pick<IBookmark, 'tags'>;
