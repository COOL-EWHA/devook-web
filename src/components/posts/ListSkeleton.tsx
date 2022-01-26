import React from 'react';
import styled from 'styled-components';

import { PostPreviewCardSkeleton } from 'src/components/common';

interface IListSkeletonProps {
  fetchLimit: number;
}

function ListSkeleton({ fetchLimit }: IListSkeletonProps) {
  return (
    <Wrapper>
      {[...Array(fetchLimit)].map((_, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <PostPreviewCardSkeleton key={index} />
      ))}
    </Wrapper>
  );
}

export default ListSkeleton;

const Wrapper = styled.div`
  margin: 3.2rem 0;
`;
