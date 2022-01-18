import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

import { BookmarkSearchInput } from 'src/components/bookmarks';
import { PostCard, ScrollToTopButton } from 'src/components/common';
import { useInfiniteBookmarkList } from 'src/lib/hooks';
import { BookmarkPostPreview } from 'src/types';

function BookmarkListPage() {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const { data, isLoading, error, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteBookmarkList();

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView]);

  return (
    <>
      <Outlet />
      <BookmarkSearchInput />
      {isLoading ? (
        // @TO_BE_IMPROVED: 후에 스켈레톤 추가
        <div>loading...</div>
      ) : (
        data?.pages.map((page) =>
          page?.map((bookmark: BookmarkPostPreview) => (
            <PostCard
              key={bookmark.title}
              id={bookmark.id}
              title={bookmark.title}
              thumbnail={bookmark.thumbnail}
              description={bookmark.description}
              tags={bookmark.tags}
            />
          )),
        )
      )}
      <div ref={ref} />
      <ScrollToTopButton />
    </>
  );
}

export default BookmarkListPage;
