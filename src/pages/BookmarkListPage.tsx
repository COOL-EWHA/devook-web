import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import { BookmarkSearchInput } from 'src/components/bookmarks';
import { PostCard, TagListButton, ScrollToTopButton } from 'src/components/common';

import { BOOKMARK_LIST } from 'src/constant/mockData';

function BookmarkListPage() {
  return (
    <Wrapper>
      <Outlet />
      <BookmarksWrapper>
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
      </BookmarksWrapper>
      <TagListButton />
      <ScrollToTopButton />
    </Wrapper>
  );
}

export default BookmarkListPage;

const BookmarksWrapper = styled.div``;

const Wrapper = styled.div`
  display: flex;
`;
