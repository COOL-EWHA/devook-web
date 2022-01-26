import { apiClient } from '.';
import { PostPreview, RelatedPostListParams } from 'src/types';
import { getQueryString } from 'src/lib/utils';

export const getRelatedPostList = (params: RelatedPostListParams): Promise<PostPreview[]> =>
  apiClient.get(`/posts${getQueryString(params)}`).then((res) => res.data);
