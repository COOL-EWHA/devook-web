import React from 'react';

import { RelatedPostList, PostCard } from 'src/components/common';
import { BookmarkInfo } from 'src/components/bookmarks';

function BookmarkDetailPage() {
  return (
    <>
      <PostCard isBookmarked />
      <BookmarkInfo />
      <RelatedPostList />
    </>
  );
}

export default BookmarkDetailPage;
