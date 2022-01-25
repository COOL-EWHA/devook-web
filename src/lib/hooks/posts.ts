import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

import { RELATED_POST_FETCH_LIMIT } from 'src/constant';
import { getBookmarkRelatedPost } from 'src/lib/api';
import { bookmarkKeys } from 'src/lib/utils/queryKeys';

export const useBookmarkRelatedPostList = () => {
  const params = useParams();
  const id = params.id ?? '';

  const queryFn = () => getBookmarkRelatedPost({ bookmarkId: Number(id), limit: RELATED_POST_FETCH_LIMIT });
  const { data, isLoading } = useQuery(bookmarkKeys.bookmarkRelatedPost(Number(id)), queryFn);

  return { data, isLoading };
};
