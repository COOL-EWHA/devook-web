import React from 'react';
import styled from 'styled-components';

import { GREY } from 'src/constant';
import { Skeleton } from '.';

function PostPreviewCardSkeleton() {
  return (
    <Wrapper>
      <ContentWrapper>
        <PWrapper>
          <Skeleton height="2rem" margin="0 0 1rem" />
          <Skeleton height="4rem" />
        </PWrapper>
        <Skeleton width="7.2rem" height="7.2rem" margin="0 0 0 2rem" />
      </ContentWrapper>
      <Footer>
        <Skeleton width="18rem" height="2rem" />
        <Skeleton width="15rem" height="2rem" />
      </Footer>
    </Wrapper>
  );
}

export default PostPreviewCardSkeleton;

const Wrapper = styled.div`
  margin-bottom: 1rem;
  border-bottom: 1px solid ${GREY[200]};
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0;
`;

const PWrapper = styled.div`
  max-width: calc(100% - 9.2rem);
  width: 100%;
  margin-bottom: 0.6rem;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
