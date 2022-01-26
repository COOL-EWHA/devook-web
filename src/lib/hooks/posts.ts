import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

import { NO_REFETCH, RELATED_POST_FETCH_LIMIT } from 'src/constant';
import { getPost, getRelatedPostList } from 'src/lib/api';
import { postKeys } from 'src/lib/utils/queryKeys';

export const useRelatedPostList = (bookmarkId: number) => {
  const filter = {
    bookmarkId,
    limit: RELATED_POST_FETCH_LIMIT,
  };

  const queryFn = () => getRelatedPostList(filter);
  const { data, isLoading } = useQuery(postKeys.list(filter), queryFn, NO_REFETCH);

  return { data, isLoading };
};

export const usePost = () => {
  const params = useParams();
  const postId = Number(params.id ?? '');

  const queryFn = () => getPost(postId);
  const { data, isLoading } = useQuery(postKeys.detail(postId), queryFn, NO_REFETCH);

  return { id: postId, data, isLoading };
};
