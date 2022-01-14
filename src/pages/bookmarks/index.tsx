import React from 'react';
import { Outlet } from 'react-router-dom';

import { Input, PostCard, ScrollToTopButton } from 'src/components/common';

import { BOOKMARK_LIST } from 'src/constant/mockData';

function BookmarkListPage() {
  return (
    <>
      <Input iconType="search" placeholder="북마크를 검색해보세요." />
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
      <Outlet />
    </>
  );
}

export default BookmarkListPage;
