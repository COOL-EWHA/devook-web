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
      <BookmarkListWrapper>
        {isLoggedIn && <PostSearchInput type="bookmark" />}
        <BookmarkList isRead={false} />
      </BookmarkListWrapper>
      {isLoggedIn && <PostTagListOpenButton postType="bookmark" isBookmarkRead={false} />}
      <ScrollToTopButton />
    </Wrapper>
  );
}

export default ToReadPage;

const Wrapper = styled.div`
  display: flex;
  height: 100%;
`;

const BookmarkListWrapper = styled.div`
  width: 100%;
`;
