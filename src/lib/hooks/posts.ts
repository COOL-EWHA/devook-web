import { useQuery } from 'react-query';

import { NO_REFETCH, RELATED_POST_FETCH_LIMIT } from 'src/constant';
import { getRelatedPostList } from 'src/lib/api';
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
