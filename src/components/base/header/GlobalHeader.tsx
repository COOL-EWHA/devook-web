import React from 'react';
import styled from 'styled-components';

import { Icon } from 'src/components/common';

import { CACTUS_GREEN, GREY } from 'src/styles/colors';
import { DESKTOP_MAX_WIDTH } from 'src/constant';

function GlobalHeader() {
  return (
    <Wrapper>
      <LogoLabel>Devook</LogoLabel>
      <IconsWrapper>
        <BookmarkAddButton>북마크 추가</BookmarkAddButton>
        <ResponsiveIcon isMobile={false}>notifications</ResponsiveIcon>
        <ResponsiveIcon isMobile>add</ResponsiveIcon>
        <Icon>person</Icon>
      </IconsWrapper>
    </Wrapper>
  );
}

export default GlobalHeader;

const Wrapper = styled.header`
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
    height: 4.4rem;

    padding: 0 1.2rem;
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

    :last-child {
      @media screen and (max-width: 1023px) {
        margin-left: 0.4rem;
      }
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
  margin: 0 8px;
  cursor: pointer;

  @media screen and (max-width: 1023px) {
    display: none;
  }
`;

const ResponsiveIcon = styled(Icon)<{ isMobile: boolean }>`
  ${(props) =>
    props.isMobile
      ? `
      display: none;
      @media screen and (max-width: 1023px) {
        display: block;
      }`
      : `
      display: block;
      @media screen and (max-width: 1023px) {
        display: none;
      }`}
`;
