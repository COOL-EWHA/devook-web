import { IBookmark } from 'src/interfaces';

export type BookmarkPreview = Pick<IBookmark, 'id' | 'title' | 'thumbnail' | 'description' | 'url' | 'tags'>;
export type BookmarkCreateParams = Pick<IBookmark, 'url' | 'memo'>;
export type BookmarkDeleteParams = Pick<IBookmark, 'id'>;
export type BookmarkListParams = {
  cursor?: number;
  limit?: number;
  tags?: string;
};
