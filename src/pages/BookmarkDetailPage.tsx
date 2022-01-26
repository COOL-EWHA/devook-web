import React from 'react';

import {
  BookmarkDetailCard,
  BookmarkDetailCardSkeleton,
  BookmarkRelatedPostList,
  BookmarkInfoCard,
  BookmarkInfoSkeleton,
} from 'src/components/bookmarks';

import { useBookmark } from 'src/lib/hooks';

function BookmarkDetailPage() {
  const { id, data, isLoading } = useBookmark();

  return (
    <>
      {isLoading && (
        <>
          <BookmarkDetailCardSkeleton />
          <BookmarkInfoSkeleton />
        </>
      )}
      {data && (
        <>
          <BookmarkDetailCard id={id} data={data} />
          <BookmarkInfoCard data={data} />
        </>
      )}
      <BookmarkRelatedPostList bookmarkId={id} />
    </>
  );
}

export default BookmarkDetailPage;
