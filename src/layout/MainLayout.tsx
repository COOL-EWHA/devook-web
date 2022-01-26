import React from 'react';
import styled from 'styled-components';

import { GlobalHeader, GlobalNavigationBar } from 'src/components/base';
import { CONTENT_MAX_WIDTH, SUB_ROUTES } from 'src/constant';

import { useLocation } from 'react-router-dom';

interface IMainLayoutProps {
  children: JSX.Element;
}

export default function MainLayout({ children }: IMainLayoutProps) {
  const { pathname } = useLocation();
  const isSubRoute = !!SUB_ROUTES.find((subRoute) => pathname.includes(subRoute.pathname));

  return (
    <>
      <GlobalHeader />
      <Wrapper>
        <GlobalNavigationBar />
        <Main isSubRoute={isSubRoute}>{children}</Main>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: ${CONTENT_MAX_WIDTH};
  min-height: 100vh;
  margin: 0 auto;
  padding: 0 2rem;
`;

const Main = styled.main<{ isSubRoute: boolean }>`
  width: 100%;
  @media screen and (min-width: 1025px) {
    margin-top: 6.4rem;
    margin-left: 2.4rem;
  }
  @media screen and (max-width: 1024px) {
    margin-top: 6.8rem;
    margin-bottom: ${({ isSubRoute }) => (isSubRoute ? 0 : '6rem')};
  }
`;
