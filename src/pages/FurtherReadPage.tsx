import React from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';

import { ScrollToTopButton } from 'src/components/common';
import { PostList, PostSearchInput, PostTagListOpenButton } from 'src/components/posts';

import { isUserLoggedIn } from 'src/lib/store';

function FurtherReadPage() {
  const isLoggedIn = useRecoilValue(isUserLoggedIn);

  return (
    <Wrapper>
      {isLoggedIn && (
        <>
          <FurtherReadWrapper>
            <PostSearchInput />
            <PostList />
          </FurtherReadWrapper>
          <PostTagListOpenButton />
        </>
      )}
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
