import React from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';

import { ScrollToTopButton } from 'src/components/common';
import { PostSearchInput, PostTagListOpenButton } from 'src/components/posts';
import { BookmarkList } from 'src/components/bookmarks';
import { isUserLoggedIn } from 'src/lib/store';

function BookmarkListPage() {
  const isLoggedIn = useRecoilValue(isUserLoggedIn);

  return (
    <Wrapper>
      <BookmarkListWrapper>
        {isLoggedIn && <PostSearchInput type="bookmark" />}
        <BookmarkList />
      </BookmarkListWrapper>
      {isLoggedIn && <PostTagListOpenButton postType="bookmark" />}
      <ScrollToTopButton />
    </Wrapper>
  );
}

export default BookmarkListPage;

const Wrapper = styled.div`
  display: flex;
  height: 100%;
`;

const BookmarkListWrapper = styled.div`
  width: 100%;
`;
