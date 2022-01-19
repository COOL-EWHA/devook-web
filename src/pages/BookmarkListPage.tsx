import React from 'react';
import { Outlet } from 'react-router-dom';

import { BookmarkSearchInput, BookmarkList } from 'src/components/bookmarks';
import { ScrollToTopButton } from 'src/components/common';

function BookmarkListPage() {
  return (
    <>
      <Outlet />
      <BookmarkSearchInput />
      <BookmarkList />
      <ScrollToTopButton />
    </>
  );
}

export default BookmarkListPage;
