import React from 'react';
import { useInfiniteQuery } from 'react-query';

import { getBookmarkList } from 'src/lib/api';
import { BookmarkPreview } from 'src/types';

const BOOKMARK_FETCH_LIMIT = 10;

export const useBookmarkList = () => {
  // eslint-disable-next-line consistent-return
  const getNextPageParam = (fetchResponse?: BookmarkPreview[]) => {
    if (fetchResponse) {
      if (fetchResponse.length < BOOKMARK_FETCH_LIMIT) {
        return undefined;
      }
      const lastBookmarkId = fetchResponse[fetchResponse.length - 1]?.id;
      return lastBookmarkId;
    }
  };

  const { data, isLoading, error, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery(
    'bookmarkList',
    ({ pageParam }) => getBookmarkList({ cursor: pageParam }),
    {
      getNextPageParam,
    },
  );

  return { data, isLoading, error, fetchNextPage, hasNextPage, isFetchingNextPage };
};
