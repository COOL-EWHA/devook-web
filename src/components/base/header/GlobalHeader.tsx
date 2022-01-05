import React from 'react';
import styled from 'styled-components';

import AddButton from 'src/components/bookmarks/AddButton';
import { MaterialIcon } from 'src/components/common';

import { CACTUS_GREEN, GREY } from 'src/styles/colors';
import { DESKTOP_MAX_WIDTH } from 'src/constant';

function GlobalHeader() {
  return (
    <Wrapper>
      <LogoLink>Devook</LogoLink>
      <ButtonsWrapper>
        <AddButton />
        <NotificationIcon type="notifications" width="2.4rem" />
        <MaterialIcon type="person" width="2.4rem" />
      </ButtonsWrapper>
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
    height: 4.8rem;
  }

  @media screen and (max-width: 1023px) {
    height: 4.4rem;

    padding: 0 1.2rem;
    border-bottom: 1px solid ${GREY[300]};
  }
`;

const LogoLink = styled.a`
  font-size: 2rem;
  font-weight: 700;
  color: ${CACTUS_GREEN[500]};
  cursor: pointer;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;

  .material-icons {
    cursor: pointer;
    color: ${GREY[700]};

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

const NotificationIcon = styled(MaterialIcon)`
  display: block;
  @media screen and (max-width: 1023px) {
    display: none;
  }
`;
