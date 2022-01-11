import React, { useState } from 'react';
import styled from 'styled-components';

import GlobalNavigationBar from 'src/components/base/GlobalNavigationBar';
import { GlobalHeader } from 'src/components/base/header';
import { Modal } from 'src/components/common';

import { DESKTOP_MAX_WIDTH } from 'src/constant';

interface IMainLayoutProps {
  children: React.ReactNode;
}

function MainLayout({ children }: IMainLayoutProps) {
  const [isModalOpened, setIsModalOpened] = useState(false);

  return (
    <>
      <GlobalHeader isModalOpened={isModalOpened} setIsModalOpened={setIsModalOpened} />
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
  position: relative;
  flex: 1;
  margin-top: 7.2rem;
  @media screen and (max-width: 1024px) {
    margin-top: 6rem;
    margin-bottom: 7.2rem;
  }
`;
