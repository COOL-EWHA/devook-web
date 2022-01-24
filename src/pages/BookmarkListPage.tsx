import React from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';

import { FixedButtons } from 'src/components/common';
import { BookmarkSearchInput, BookmarkList } from 'src/components/bookmarks';
import { accessToken } from 'src/lib/store';

function BookmarkListPage() {
  const isLoggedIn = !!useRecoilValue(accessToken);

  return (
    <Wrapper>
      {isLoggedIn && (
        <BookmarkListWrapper>
          <BookmarkSearchInput />
          <BookmarkList />
        </BookmarkListWrapper>
      )}
      <FixedButtons />
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
