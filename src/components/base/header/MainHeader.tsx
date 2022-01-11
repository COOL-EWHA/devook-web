import React from 'react';
import styled from 'styled-components';

import BookmarkAddButton from 'src/components/bookmarks/AddButton';
import { MaterialIcon, Link } from 'src/components/common';
import LogoIcon from 'src/components/assets/icons/logo';
import { CACTUS_GREEN, GREY, WHITE } from 'src/styles/colors';
import { DESKTOP_MAX_WIDTH } from 'src/constant';

interface IMainHeaderProps {
  setIsModalOpened: React.Dispatch<React.SetStateAction<boolean>>;
  isModalOpened: boolean;
}

function MainHeader({ setIsModalOpened, isModalOpened }: IMainHeaderProps) {
  return (
    <Wrapper>
      <ContentWrapper>
        <LogoLink to="/">
          <LogoIcon />
          <LogoText>Devook</LogoText>
        </LogoLink>
        <ButtonsWrapper>
          <BookmarkAddButton isModalOpened={isModalOpened} setIsModalOpened={setIsModalOpened} />
          <NotificationIcon />
          <Link to="/my">
            <ProfileIcon />
          </Link>
        </ButtonsWrapper>
      </ContentWrapper>
    </Wrapper>
  );
}

export default MainHeader;

const Wrapper = styled.header`
  position: fixed;
  z-index: 10;
  top: 0;
  width: 100%;
  background-color: ${WHITE};

  @media screen and (min-width: 1025px) {
    height: 6rem;
  }

  @media screen and (max-width: 1024px) {
    height: 5.2rem;
    border-bottom: 1px solid ${GREY[300]};
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: ${DESKTOP_MAX_WIDTH};
  width: 100%;
  height: 100%;
  padding: 0 2rem;
  margin: 0 auto;
`;

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-right: auto;
`;

const LogoText = styled.p`
  font-family: 'Ubuntu Condensed', sans-serif;
  font-size: 2.4rem;
  font-weight: 400;
  color: ${CACTUS_GREEN[500]};
  margin-top: 0.4rem;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

// @TO_BE_IMPROVED: 후에 link 추가하고 해당 컴포넌트에 margin-left: 0.4 주어야 함.
const NotificationIcon = styled(MaterialIcon).attrs({ type: 'notifications', width: '2.4rem' })`
  @media screen and (max-width: 1024px) {
    && {
      display: none;
    }
  }
  margin-left: 0.4rem;
`;

// @TO_BE_IMPROVED: 후에 link 추가하고 해당 컴포넌트에 margin-left: 0.4 주어야 함.
const ProfileIcon = styled(MaterialIcon).attrs({ type: 'person', width: '2.4rem' })`
  margin-left: 0.4rem;
`;
