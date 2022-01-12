import React from 'react';
import { Outlet } from 'react-router-dom';

import { BookmarkCard } from 'src/components/bookmarks';
import { Input } from 'src/components/common';

import { BOOKMARK_LIST } from 'src/constant/mockData';

function BookmarkListPage() {
  return (
    <>
      <Input iconType="search" placeholder="북마크한 글을 검색해보세요" />
      {BOOKMARK_LIST.map((bookmark) => (
        <BookmarkCard
          title={bookmark.title}
          thumbnail={bookmark.thumbnail}
          description={bookmark.description}
          tags={bookmark.tags}
        />
      ))}
      <Outlet />
    </>
  );
}

export default BookmarkListPage;
