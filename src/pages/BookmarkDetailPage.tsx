import React from 'react';

import { PostCard, PostCardSkeleton, RelatedPostList } from 'src/components/posts';
import { BookmarkInfoCard, BookmarkInfoSkeleton } from 'src/components/bookmarks';

import { useBookmark } from 'src/lib/hooks';

function BookmarkDetailPage() {
  const { id, data, isLoading } = useBookmark();

  return (
    <>
      {isLoading && (
        <>
          <PostCardSkeleton />
          <BookmarkInfoSkeleton />
        </>
      )}
      {data && (
        <>
          <PostCard bookmarkId={id} data={data} />
          <BookmarkInfoCard data={data} />
        </>
      )}
      <RelatedPostList />
    </>
  );
}

export default BookmarkDetailPage;
