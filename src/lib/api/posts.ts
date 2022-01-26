import { apiClient } from '.';

import { PostListParams, PostPreview, RelatedPostListParams } from 'src/types';
import { getQueryString } from 'src/lib/utils';

export const getRelatedPostList = (params: RelatedPostListParams): Promise<PostPreview[]> =>
  apiClient.get(`/posts${getQueryString(params)}`).then((res) => res.data);

export const getRecommendedPostList = (params: PostListParams): Promise<PostPreview[]> =>
  apiClient.get(`/posts${getQueryString(params)}`).then((res) => res.data);

export const getRecommendedPostTagList = (): Promise<string[]> => apiClient.get('/posts/tags').then((res) => res.data);
