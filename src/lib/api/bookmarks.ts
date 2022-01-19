import { apiClient } from '.';

import { BookmarkPreview, BookmarkCreateBody, BookmarkDeleteParams, BookmarkListQueries } from 'src/types';
import { getQueryString } from 'src/lib/utils';

export const createBookmark = (body: BookmarkCreateBody): Promise<void> =>
  apiClient.post(`/bookmarks`, body).then((res) => res.data);

export const deleteBookmark = ({ id }: BookmarkDeleteParams): Promise<void> =>
  apiClient.delete(`/bookmarks/${id}`).then((res) => res.data);

export const getBookmarkList = (query: BookmarkListQueries): Promise<BookmarkPreview[]> =>
  apiClient.get(`/bookmarks${getQueryString(query)}`).then((res) => res.data);
