import React from 'react';
import styled from 'styled-components';

import GlobalNavigationBar from '@/components/base/GlobalNavigationBar';
import GlobalHeader from '@/components/base/header/GlobalHeader';

import { DESKTOP_MAX_WIDTH, MOBILE_MAX_WIDTH } from '@/constant';

interface IMainLayoutProps {
  children: React.ReactNode;
}

function MainLayout({ children }: IMainLayoutProps) {
  return (
    <Wrapper>
      <GlobalHeader />
      <GlobalNavigationBar />
      <Main>{children}</Main>
    </Wrapper>
  );
}

export default MainLayout;

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;

  @media screen and (min-width: 1024px) {
    max-width: ${DESKTOP_MAX_WIDTH};
    padding: 0 2rem;
  }

  @media screen and (max-width: 1023px) {
    /* max-width: ${MOBILE_MAX_WIDTH}; */
  }
`;

const Main = styled.main``;
