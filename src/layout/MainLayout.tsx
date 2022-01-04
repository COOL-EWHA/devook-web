import React from 'react';
import styled from 'styled-components';

import GlobalNavigationBar from '@/components/base/gnb/GlobalNavigationBar';
import GlobalHeader from '@/components/base/header/GlobalHeader';

interface IMainLayoutProps {
  children: React.ReactNode;
}

function MainLayout({ children }: IMainLayoutProps) {
  return (
    <MainLayoutWrapper>
      <GlobalHeader />
      <main>{children}</main>
      <GlobalNavigationBar />
    </MainLayoutWrapper>
  );
}

export default MainLayout;

const MainLayoutWrapper = styled.div`
  max-width: 60rem;
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
`;
