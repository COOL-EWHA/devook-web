import React from 'react';
import { Outlet } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { ScrollToTopButton } from 'src/components/common';
import { BookmarkSearchInput, BookmarkList } from 'src/components/bookmarks';
import { accessToken } from 'src/lib/store';

function BookmarkListPage() {
  const isLoggedIn = !!useRecoilValue(accessToken);

  return (
    <>
      <Outlet />
      {isLoggedIn && (
        <>
          <BookmarkSearchInput />
          <BookmarkList />
        </>
      )}
      <ScrollToTopButton />
    </>
  );
}

export default BookmarkListPage;
