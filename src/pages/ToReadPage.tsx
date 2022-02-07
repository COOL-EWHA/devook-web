import React from 'react';
import styled from 'styled-components';

import { PostSearchInput, PostTagListOpenButton } from 'src/components/posts';
import { BookmarkList } from 'src/components/bookmarks';
import { ScrollToTopButton } from 'src/components/common';

function ToReadPage() {
  return (
    <Wrapper>
      <BookmarkListWrapper>
        <PostSearchInput type="bookmark" />
        <BookmarkList isRead={false} />
      </BookmarkListWrapper>
      <PostTagListOpenButton postType="bookmark" isBookmarkRead={false} />
      <ScrollToTopButton />
    </Wrapper>
  );
}

export default ToReadPage;

const Wrapper = styled.div`
  display: flex;
`;

const BookmarkListWrapper = styled.div`
  width: 100%;
`;
