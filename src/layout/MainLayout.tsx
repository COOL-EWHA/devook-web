import React, { useState } from 'react';
import styled from 'styled-components';

import GlobalNavigationBar from 'src/components/base/GlobalNavigationBar';
import GlobalHeader from 'src/components/base/header/GlobalHeader';

import MyPage from 'src/pages/MyPage';

import { DESKTOP_MAX_WIDTH } from 'src/constant';

interface IMainLayoutProps {
  children: React.ReactNode;
}

function MainLayout({ children }: IMainLayoutProps) {
  const [isMyPageOpened, setMyPageOpened] = useState(false);

  return (
    <>
      <GlobalHeader setMyPageOpened={setMyPageOpened} />
      <Wrapper>
        <GlobalNavigationBar />
        <Main>{isMyPageOpened ? <MyPage setMyPageOpened={setMyPageOpened} /> : children}</Main>
      </Wrapper>
    </>
  );
}

export default MainLayout;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;

  max-width: ${DESKTOP_MAX_WIDTH};

  padding: 0 2rem;
`;

const Main = styled.main`
  flex: 1;
  margin-top: 6.4rem;
  @media screen and (max-width: 1024px) {
    margin-top: 6rem;
    margin-bottom: 7.2rem;
  }
`;
