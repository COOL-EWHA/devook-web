import { apiClient } from '.';

export const createBookmark = (params: { id?: number; url: string; memo?: string }): Promise<void> =>
  apiClient.post(`/bookmarks`, params).then((res) => res.data);
