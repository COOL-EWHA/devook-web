import React from 'react';
import styled from 'styled-components';

import { RELATED_POST_FETCH_LIMIT } from 'src/constant';
import { PostPreviewCardSkeleton } from 'src/components/posts';

function BookmarkRelatedPostListSkeleton() {
  return (
    <Wrapper>
      {[...Array(RELATED_POST_FETCH_LIMIT)].map((_, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <PostPreviewCardSkeleton key={index} />
      ))}
    </Wrapper>
  );
}

export default BookmarkRelatedPostListSkeleton;

const Wrapper = styled.div`
  margin: 2rem 0;
`;
