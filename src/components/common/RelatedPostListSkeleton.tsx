import React from 'react';
import styled from 'styled-components';

import { RELATED_POST_FETCH_LIMIT } from 'src/constant';
import { PostPreviewCardSkeleton, Skeleton } from '.';

function RelatedPostListSkeleton() {
  return (
    <Wrapper>
      <Skeleton height="2.8rem" margin="0 0 3.2rem" />
      {[...Array(RELATED_POST_FETCH_LIMIT)].map((_, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <PostPreviewCardSkeleton key={index} />
      ))}
    </Wrapper>
  );
}

export default RelatedPostListSkeleton;

const Wrapper = styled.div`
  margin: 3.2rem 0;
`;
