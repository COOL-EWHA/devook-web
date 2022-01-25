import React from 'react';
import styled from 'styled-components';

import { BOOKMARK_FETCH_LIMIT } from 'src/constant';
import { PostPreviewCardSkeleton } from '../common';

function BookmarkListSkeleton() {
  return (
    <Wrapper>
      {[...Array(BOOKMARK_FETCH_LIMIT)].map((_, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <PostPreviewCardSkeleton key={index} />
      ))}
    </Wrapper>
  );
}

export default BookmarkListSkeleton;

const Wrapper = styled.div`
  margin: 3.2rem 0;
`;