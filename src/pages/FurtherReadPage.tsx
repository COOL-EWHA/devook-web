import React from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';

import { FixedButtons } from 'src/components/common';
import { isUserLoggedIn } from 'src/lib/store';
import { RecommendedPostList, RecommendedPostSearchInput } from 'src/components/furtherRead';

function FurtherReadPage() {
  const isLoggedIn = useRecoilValue(isUserLoggedIn);

  return (
    <Wrapper>
      {isLoggedIn && (
        <>
          <FurtherReadWrapper>
            <RecommendedPostSearchInput />
            <RecommendedPostList />
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
