import React from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';

import { PostList, PostSearchInput, PostTagListOpenButton } from 'src/components/posts';
import { ScrollToTopButton } from 'src/components/common';

import { isUserLoggedIn } from 'src/lib/store';

function BookmarkListPage() {
  const isLoggedIn = useRecoilValue(isUserLoggedIn);

  return (
    <Wrapper>
      {isLoggedIn && (
        <>
          <BookmarkListWrapper>
            <PostSearchInput type="bookmark" />
            <PostList type="bookmark" />
          </BookmarkListWrapper>
          <PostTagListOpenButton postType="bookmark" />
        </>
      )}
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
