import React from 'react';
import { useInfiniteQuery } from 'react-query';

import { getBookmarkList } from 'src/lib/api';

const BOOKMARK_FETCH_LIMIT = 10;

export const useInfiniteBookmarkList = () => {
  // 맨 처음에는, 본 북마크들 중 마지막 것의 아이디를 아는 것이 불가능하여 입력할 수 있는 최대의 숫자를 넣어줌
  // eslint-disable-next-line consistent-return
  const fetchInfiniteBookmarkList = async ({ cursor = Number.MAX_SAFE_INTEGER }) => {
    try {
      const data = await getBookmarkList({ tags: '', cursor, limit: BOOKMARK_FETCH_LIMIT });
      return data;
    } catch (err) {
      console.log('err', err);
    }
  };

  const { data, isLoading, error, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage, status } =
    useInfiniteQuery('bookmarks', ({ pageParam }) => fetchInfiniteBookmarkList({ cursor: pageParam }), {
      getNextPageParam: (lastPage, pages) => {
        if (lastPage?.length === BOOKMARK_FETCH_LIMIT) {
          let lastBookmarkPostId;
          pages.forEach((bookmarkList) =>
            bookmarkList?.forEach((bookmark, index) => {
              if (bookmarkList.length === index + 1) {
                lastBookmarkPostId = bookmark.id;
              }
            }),
          );

          return lastBookmarkPostId;
        }
        return false;
      },
    });

  return { data, isLoading, error, fetchNextPage, hasNextPage, isFetchingNextPage };
};
