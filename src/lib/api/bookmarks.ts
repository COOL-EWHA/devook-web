import { apiClient } from '.';

import { BookmarkPreview, BookmarkCreateParams, BookmarkListParams } from 'src/types';
import { getQueryString } from 'src/lib/utils';

export const createBookmark = (params: BookmarkCreateParams): Promise<void> =>
  apiClient.post(`/bookmarks`, params).then((res) => res.data);

export const deleteBookmark = (id: number): Promise<void> =>
  apiClient.delete(`/bookmarks/${id}`).then((res) => res.data);

export const getBookmarkList = (params: BookmarkListParams): Promise<BookmarkPreview[]> =>
  apiClient.get(`/bookmarks${getQueryString(params)}`).then((res) => res.data);
