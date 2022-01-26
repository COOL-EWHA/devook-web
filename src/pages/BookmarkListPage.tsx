import React from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';

import { FixedButtons } from 'src/components/common';
import { BookmarkList, BookmarkSearchInput } from 'src/components/bookmarks';
import { isUserLoggedIn } from 'src/lib/store';

function BookmarkListPage() {
  const isLoggedIn = useRecoilValue(isUserLoggedIn);

  return (
    <Wrapper>
      {isLoggedIn && (
        <>
          <BookmarkListWrapper>
            <BookmarkSearchInput />
            <BookmarkList />
          </BookmarkListWrapper>
          <FixedButtons />
        </>
      )}
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
