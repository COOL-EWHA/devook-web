import React from 'react';

import { PostCard } from 'src/components/common';
import { BookmarkInfo } from 'src/components/bookmarks';

function BookmarkDetailPage() {
  return (
    <>
      <PostCard isBookmarked />
      <BookmarkInfo />
    </>
  );
}

export default BookmarkDetailPage;
