import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import GlobalNavigationBar from 'src/components/base/GlobalNavigationBar';
import { BackHeader, MainHeader } from 'src/components/base/header';

import MyPage from 'src/pages/MyPage';

import { DESKTOP_MAX_WIDTH } from 'src/constant';

interface IMainLayoutProps {
  children: React.ReactNode;
}

function MainLayout({ children }: IMainLayoutProps) {
  const [isMyPageOpened, setMyPageOpened] = useState(false);
  const [headerType, setHeaderType] = useState<'BackHeader' | 'MainHeader'>('MainHeader');

  useEffect(() => {
    /* @TO_BE_IMPROVED: 라우팅 추가후에 
    상세페이지,마이페이지,알림목록페이지를 제외하고는 MainHeader를 띄우도록 로직 수정 */
    if (isMyPageOpened) {
      setHeaderType('BackHeader');
    } else {
      setHeaderType('MainHeader');
    }
  }, [isMyPageOpened]);

  return (
    <>
      {headerType === 'MainHeader' ? (
        <MainHeader setMyPageOpened={setMyPageOpened} />
      ) : (
        <BackHeader pageTitle={isMyPageOpened ? '마이페이지' : undefined} />
      )}
      <Wrapper>
        <GlobalNavigationBar />
        <Main>{children}</Main>
      </Wrapper>
    </>
  );
}

export default MainLayout;

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
  margin-top: 6.4rem;
  @media screen and (max-width: 1024px) {
    margin-top: 6rem;
    margin-bottom: 7.2rem;
  }
`;
