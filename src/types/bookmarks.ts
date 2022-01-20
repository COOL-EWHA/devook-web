import { IBookmark } from 'src/interfaces';
import { ListRequestParams } from '.';

export type BookmarkPreview = Pick<IBookmark, 'id' | 'title' | 'thumbnail' | 'description' | 'url' | 'tags'>;
export type BookmarkCreateParams = Pick<IBookmark, 'url' | 'memo'>;
export type BookmarkListParams = ListRequestParams & Pick<IBookmark, 'tags'> & { q?: string };
export type BookmarkListFilter = Pick<BookmarkListParams, 'tags' | 'q'>;
export type BookmarkMemoEditParams = Pick<IBookmark, 'id' | 'memo'>;
