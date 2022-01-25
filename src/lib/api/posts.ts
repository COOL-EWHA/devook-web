import { apiClient } from '.';
import { PostPreview, RelatedPostListParams } from 'src/types';
import { getQueryString } from 'src/lib/utils';
import { IPost } from 'src/interfaces';

export const getRelatedPostList = (params: RelatedPostListParams): Promise<PostPreview[]> =>
  apiClient.get(`/posts${getQueryString(params)}`).then((res) => res.data);

export const getPost = (id: number): Promise<IPost> => apiClient.get(`/posts/${id}`).then((res) => res.data);
