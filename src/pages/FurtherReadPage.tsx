import React from 'react';
import styled from 'styled-components';

import { ScrollToTopButton } from 'src/components/common';
import { PostList, PostSearchInput, PostTagListOpenButton } from 'src/components/posts';

function FurtherReadPage() {
  return (
    <Wrapper>
      <FurtherReadWrapper>
        <PostSearchInput />
        <PostList />
      </FurtherReadWrapper>
      <PostTagListOpenButton />
      <ScrollToTopButton />
    </Wrapper>
  );
}

export default FurtherReadPage;

const Wrapper = styled.div`
  display: flex;
`;

const FurtherReadWrapper = styled.div`
  width: 100%;
`;
