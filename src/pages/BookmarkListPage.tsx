import React from 'react';
import { Outlet } from 'react-router-dom';

import { BookmarkSearchInput } from 'src/components/bookmarks';
import { PostCard, ScrollToTopButton } from 'src/components/common';

import { BOOKMARK_LIST } from 'src/constant/mockData';

function BookmarkListPage() {
  return (
    <>
      <Outlet />
      <BookmarkSearchInput />
      {BOOKMARK_LIST.map((bookmark) => (
        <PostCard
          key={bookmark.title}
          title={bookmark.title}
          thumbnail={bookmark.thumbnail}
          description={bookmark.description}
          tags={bookmark.tags}
        />
      ))}
      <ScrollToTopButton />
    </>
  );
}

export default BookmarkListPage;
