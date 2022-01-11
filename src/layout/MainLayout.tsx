import React from 'react';
import styled from 'styled-components';

import GlobalNavigationBar from 'src/components/base/GlobalNavigationBar';
import { GlobalHeader } from 'src/components/base/header';

import { DESKTOP_MAX_WIDTH } from 'src/constant';

interface IMainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: IMainLayoutProps) {
  return (
    <>
      <GlobalHeader />
      <Wrapper>
        <GlobalNavigationBar />
        <Main>{children}</Main>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: ${DESKTOP_MAX_WIDTH};
  min-height: 100vh;
  margin: 0 auto;
  padding: 0 2rem;
`;

const Main = styled.main`
  flex: 1;
  margin-top: 7.2rem;
  @media screen and (max-width: 1024px) {
    margin-top: 6rem;
    margin-bottom: 7.2rem;
  }
`;
