import { apiClient } from '.';

import { BookmarkPostPreview, CreateBookmarkParams } from 'src/types';

export const createBookmark = (params: CreateBookmarkParams): Promise<void> =>
  apiClient.post(`/bookmarks`, params).then((res) => res.data);

export const deleteBookmark = ({ id }: { id?: number }) => apiClient.delete(`/bookmarks/${id}`).then((res) => res.data);

export const getBookmarkList = ({
  tags,
  cursor,
  limit,
}: {
  tags?: string;
  cursor: number;
  limit: number;
}): Promise<BookmarkPostPreview[]> =>
  apiClient.get(`/bookmarks?tags=${tags}&cursor=${cursor}&limit=${limit}`).then((res) => res.data);
