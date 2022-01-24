import React from 'react';
import styled from 'styled-components';

import { Skeleton } from 'src/components/common';
import { GREY } from 'src/constant';

function BookmarkInfoSkeleton() {
  return (
    <Wrapper>
      <Skeleton height="2.2rem" margin="0 0 1rem" />
      <Divider />
      <Skeleton height="2rem" margin="0 0 0.8rem" />
      <Skeleton height="2rem" margin="0 0 0.8rem" />
    </Wrapper>
  );
}

export default BookmarkInfoSkeleton;

const Wrapper = styled.div`
  margin: 2rem 0;
`;

const Divider = styled.div`
  border-bottom: 1px solid ${GREY[200]};
  margin-bottom: 1.2rem;
`;
