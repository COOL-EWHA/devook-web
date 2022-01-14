import React from 'react';
import styled from 'styled-components';

import { GlobalHeader, GlobalNavigationBar } from 'src/components/base';
import { DESKTOP_MAX_WIDTH } from 'src/constant';

interface IMainLayoutProps {
  children: JSX.Element;
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
  @media screen and (min-width: 1025px) {
    margin-top: 6.4rem;
    margin-left: 2.4rem;
  }
  @media screen and (max-width: 1024px) {
    margin-top: 6rem;
    margin-bottom: 7.2rem;
  }
`;
