import React from 'react';
import styled from 'styled-components';

import { ScrollToTopButton } from 'src/components/common';
import { PostSearchInput, PostTagListOpenButton } from 'src/components/posts';
import { BookmarkList } from 'src/components/bookmarks';

function BookmarkListPage() {
  return (
    <Wrapper>
      <BookmarkListWrapper>
        <PostSearchInput type="bookmark" />
        <BookmarkList />
      </BookmarkListWrapper>
      <PostTagListOpenButton postType="bookmark" />
      <ScrollToTopButton />
    </Wrapper>
  );
}

export default BookmarkListPage;

const Wrapper = styled.div`
  display: flex;
`;

const BookmarkListWrapper = styled.div`
  width: 100%;
`;
