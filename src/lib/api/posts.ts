import { apiClient } from '.';
import { BookmarkPreview, BookmarkRelatedPostListParams } from 'src/types';
import { getQueryString } from 'src/lib/utils';

export const getBookmarkRelatedPost = (params: BookmarkRelatedPostListParams): Promise<BookmarkPreview[]> =>
  apiClient.get(`/posts${getQueryString(params)}`).then((res) => res.data);
