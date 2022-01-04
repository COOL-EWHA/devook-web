import React from 'react';
import styled from 'styled-components';

import { CACTUS_GREEN, GREY } from '@/data/colors';

function GlobalHeader() {
  return (
    <GlobalHeaderWrapper>
      <LogoLabel>Devook</LogoLabel>
      <IconsWrapper>
        <span className="material-icons">add</span>
        <span className="material-icons">person</span>
      </IconsWrapper>
    </GlobalHeaderWrapper>
  );
}

export default GlobalHeader;

const GlobalHeaderWrapper = styled.header`
  position: fixed;
  top: 0;

  width: 100vw;
  max-width: 60rem;
  height: 4.4rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 2rem;
  border-bottom: 1px solid ${GREY[300]};
`;

const LogoLabel = styled.p`
  font-size: 2rem;
  font-weight: 700;
  color: ${CACTUS_GREEN[500]};
  cursor: pointer;
`;

const IconsWrapper = styled.div`
  display: flex;

  color: ${GREY[700]};
  font-size: 2rem;

  .material-icons {
    cursor: pointer;
    color: ${GREY[700]};

    :first-child {
      margin-right: 0.4rem;
    }
  }
`;
