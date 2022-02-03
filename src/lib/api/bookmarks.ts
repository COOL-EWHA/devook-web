import { apiClient } from '.';

import {
  BookmarkPreview,
  BookmarkCreateParams,
  BookmarkListParams,
  BookmarkMemoEditParams,
  BookmarkAddParams,
} from 'src/types';
import { IBookmark } from 'src/interfaces';
import { getQueryString } from 'src/lib/utils';

export const createBookmark = (params: BookmarkCreateParams): Promise<void> =>
  apiClient.post(`/bookmarks`, params).then((res) => res.data);

export const addBookmark = (params: BookmarkAddParams): Promise<void> =>
  apiClient.post(`/bookmarks`, params).then((res) => res.data);

export const deleteBookmark = (id: number): Promise<void> =>
  apiClient.delete(`/bookmarks/${id}`).then((res) => res.data);

export const getBookmarkList = (params: BookmarkListParams): Promise<BookmarkPreview[]> =>
  apiClient.get(`/bookmarks${getQueryString(params)}`).then((res) => res.data);

export const getBookmark = (id: number): Promise<IBookmark> =>
  apiClient.get(`/bookmarks/${id}`).then((res) => res.data);

export const editBookmarkMemo = ({ id, memo, isRead, dueDate }: BookmarkMemoEditParams): Promise<void> =>
  apiClient.patch(`/bookmarks/${id}`, { memo, isRead, dueDate }).then((res) => res.data);

export const getBookmarkTagList = (): Promise<string[]> => apiClient.get('/bookmarks/tags').then((res) => res.data);
