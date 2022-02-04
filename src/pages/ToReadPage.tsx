import React from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';

import { PostSearchInput, PostTagListOpenButton } from 'src/components/posts';
import { BookmarkList } from 'src/components/bookmarks';
import { ScrollToTopButton } from 'src/components/common';

import { isUserLoggedIn } from 'src/lib/store';

function ToReadPage() {
  const isLoggedIn = useRecoilValue(isUserLoggedIn);

  return (
    <Wrapper>
      {isLoggedIn && (
        <>
          <BookmarkListWrapper>
            <PostSearchInput type="bookmark" />
            <BookmarkList isRead={false} />
          </BookmarkListWrapper>
          <PostTagListOpenButton postType="bookmark" />
        </>
      )}
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
