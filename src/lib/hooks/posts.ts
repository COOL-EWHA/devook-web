import { useQuery } from 'react-query';
import { useLocation, useParams } from 'react-router-dom';

import { RELATED_POST_FETCH_LIMIT } from 'src/constant';
import { getRelatedPostList } from 'src/lib/api';
import { postKeys } from 'src/lib/utils/queryKeys';

export const useRelatedPostList = () => {
  const { pathname } = useLocation();
  const { id = '' } = useParams();

  const filter = {
    ...(pathname.includes('bookmarks') ? { bookmarkId: Number(id) } : { postId: Number(id) }),
    limit: RELATED_POST_FETCH_LIMIT,
  };

  const queryFn = () => getRelatedPostList(filter);
  const { data, isLoading } = useQuery(postKeys.list(filter), queryFn);

  return { data, isLoading };
};
