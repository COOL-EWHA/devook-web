import React from 'react';
import styled from 'styled-components';

import GlobalNavigationBar from '@/components/base/gnb/GlobalNavigationBar';
import GlobalHeader from '@/components/base/header/GlobalHeader';

import { DESKTOP_MAX_WIDTH, MOBILE_MAX_WIDTH } from '@/constant';

interface IMainLayoutProps {
  children: React.ReactNode;
}

function MainLayout({ children }: IMainLayoutProps) {
  return (
    <MainLayoutWrapper>
      <GlobalHeader />
      <GlobalNavigationBar />
      <MainContainer>{children}</MainContainer>
    </MainLayoutWrapper>
  );
}

export default MainLayout;

const MainLayoutWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;

  @media screen and (min-width: 1024px) {
    max-width: ${DESKTOP_MAX_WIDTH};
  }

  @media screen and (max-width: 1023px) {
    max-width: ${MOBILE_MAX_WIDTH};
  }
`;

const MainContainer = styled.main``;
