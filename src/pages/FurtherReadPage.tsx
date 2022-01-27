import React from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';

import { FixedButtons } from 'src/components/common';
import { PostList } from 'src/components/posts';
import { RecommendedPostSearchInput } from 'src/components/furtherRead';

import { isUserLoggedIn } from 'src/lib/store';

function FurtherReadPage() {
  const isLoggedIn = useRecoilValue(isUserLoggedIn);

  return (
    <Wrapper>
      {isLoggedIn && (
        <>
          <FurtherReadWrapper>
            <RecommendedPostSearchInput />
            <PostList />
          </FurtherReadWrapper>
          <FixedButtons />
        </>
      )}
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
