import React from 'react';
import styled from 'styled-components';

import { MaterialIcon } from 'src/components/common';
import AddButton from 'src/components/bookmarks/AddButton';

import { GREY, WHITE } from 'src/styles/colors';

interface IBackHeaderProps {
  pageTitle?: string;
}

export default function BackHeader({ pageTitle }: IBackHeaderProps) {
  return (
    <Wrapper>
      <PageTitleWrapper>
        <MaterialIcon type="arrow_back_ios" width="2.4rem" />
        <P>{pageTitle}</P>
      </PageTitleWrapper>
      {pageTitle === '마이페이지' ? (
        <MaterialIcon type="notifications" width="2.4rem" />
      ) : (
        <ButtonsWrapper>
          <AddButton /> <ProfileIcon />
        </ButtonsWrapper>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: fixed;
  top: 0;

  display: flex;
  justify-content: space-between;

  width: 100%;
  padding: 0 2rem;
  background-color: ${WHITE};

  @media screen and (min-width: 1025px) {
    height: 6rem;
    display: none;
  }

  @media screen and (max-width: 1024px) {
    height: 5.2rem;
    border-bottom: 1px solid ${GREY[300]};
  }
`;

const PageTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
`;

const P = styled.p`
  font-size: 2rem;
  margin-left: 1.6rem;
  color: ${GREY[700]};
`;

const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ProfileIcon = styled(MaterialIcon).attrs({ type: 'person', width: '2.4rem' })`
  margin-left: 0.4rem;
`;
