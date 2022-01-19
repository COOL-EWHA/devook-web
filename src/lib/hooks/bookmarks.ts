import { useEffect, useState } from 'react';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { useInfiniteQuery, useMutation, useQueryClient } from 'react-query';
import { useInView } from 'react-intersection-observer';

import { bookmarkKeys } from 'src/lib/utils/queryKeys';
import { bookmarkListFilter } from 'src/lib/store/bookmarks';
import { createBookmark, deleteBookmark, getBookmarkList } from 'src/lib/api';
import { BookmarkCreateParams, BookmarkPreview } from 'src/types';
import { useLoginStatus } from '.';

const BOOKMARK_FETCH_LIMIT = 10;

export const useBookmarkList = () => {
  const filter = useRecoilValue(bookmarkListFilter);
  const { ref: listEndRef, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView]);

  const fetchBookmarkList = ({ pageParam = undefined }) => getBookmarkList({ cursor: pageParam, ...filter });

  const getNextPageParam = (lastPage?: BookmarkPreview[]) => {
    if (!lastPage || lastPage.length < BOOKMARK_FETCH_LIMIT) {
      return undefined;
    }
    const lastBookmarkId = lastPage[lastPage.length - 1]?.id;
    return lastBookmarkId;
  };

  const { data, isLoading, error, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery(
    bookmarkKeys.list(filter),
    fetchBookmarkList,
    {
      getNextPageParam,
    },
  );

  return { data, isLoading, error, fetchNextPage, hasNextPage, isFetchingNextPage, listEndRef };
};
