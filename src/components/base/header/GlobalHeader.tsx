import React from 'react';
import styled from 'styled-components';

import SearchBar from '@/components/bookmarks/SearchBar';

import { CACTUS_GREEN, GREY } from '@/styles/colors';
import { MOBILE_MAX_WIDTH, DESKTOP_MAX_WIDTH } from '@/constant';

function GlobalHeader() {
  return (
    <GlobalHeaderWrapper>
      <LogoLabel>Devook</LogoLabel>
      <SearchBar className="header-searchbar-desktop" />
      <IconsWrapper>
        <BookmarkAddButton>+ bookmark</BookmarkAddButton>
        <span className="material-icons desktop-icon">notifications</span>
        <span className="material-icons mobile-icon ">add</span>
        <span className="material-icons">person</span>
      </IconsWrapper>
    </GlobalHeaderWrapper>
  );
}

export default GlobalHeader;

const GlobalHeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 1024px) {
    max-width: ${DESKTOP_MAX_WIDTH};
    height: 68px;
  }

  @media screen and (max-width: 1023px) {
    max-width: ${MOBILE_MAX_WIDTH};
    height: 4.4rem;

    padding: 0 2rem;
    border-bottom: 1px solid ${GREY[300]};
  }
`;

const LogoLabel = styled.p`
  @media screen and (min-width: 1024px) {
    width: 200px;
  }

  font-size: 2rem;
  font-weight: 700;
  color: ${CACTUS_GREEN[500]};

  cursor: pointer;
`;

const IconsWrapper = styled.div`
  display: flex;
  align-items: center;

  .material-icons {
    cursor: pointer;
    color: ${GREY[700]};
    font-size: 2.4rem;

    :hover {
      color: ${GREY[900]};
    }
  }

  .desktop-icon {
    display: block;
    @media screen and (max-width: 1023px) {
      display: none;
    }
  }
  .mobile-icon {
    display: none;
    @media screen and (max-width: 1023px) {
      display: block;
    }
  }
`;

const BookmarkAddButton = styled.button`
  width: 120px;
  height: 2.5rem;

  border-radius: 8px;
  border: 1px solid ${GREY[500]};
  background: none;
  font-size: 1.2rem;
  color: ${GREY[500]};
  margin-right: 4px;
  cursor: pointer;

  @media screen and (max-width: 1023px) {
    display: none;
  }
`;
