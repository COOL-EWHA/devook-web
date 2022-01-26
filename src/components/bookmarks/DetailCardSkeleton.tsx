import React from 'react';
import styled from 'styled-components';

import { Skeleton } from 'src/components/common';

function BookmarkDetailCardSkeleton() {
  return (
    <Wrapper>
      <ContentWrapper>
        <PWrapper>
          <Skeleton height="4rem" margin="0 0 1rem" />
          <Skeleton height="4.8rem" />
        </PWrapper>
        <Skeleton width="10rem" height="10rem" margin="0 0 0 2rem" />
      </ContentWrapper>
      <Footer>
        <Skeleton width="18rem" height="2rem" />
        <Skeleton width="2rem" height="2rem" />
      </Footer>
      <Skeleton height="3.6rem" />
    </Wrapper>
  );
}

export default BookmarkDetailCardSkeleton;

const Wrapper = styled.div``;

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0.8rem 0 1.2rem;
`;

const PWrapper = styled.div`
  max-width: calc(100% - 12rem);
  width: 100%;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.2rem;
`;
