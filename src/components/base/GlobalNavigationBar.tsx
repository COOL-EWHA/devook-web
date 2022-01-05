import React from 'react';
import styled from 'styled-components';

import { Icon } from '@/components/common';

import { GREY } from '@/styles/colors';
import { NAV_ITEMS } from '@/constant';

function GlobalNavigationBar() {
  return (
    <Nav>
      {NAV_ITEMS.map(({ icon, label }) => (
        <Li key={label}>
          <Icon>{icon}</Icon>
          <Label>{label}</Label>
        </Li>
      ))}
    </Nav>
  );
}

export default GlobalNavigationBar;

const Nav = styled.nav`
  position: fixed;
  display: flex;

  @media screen and (min-width: 1024px) {
    top: 98px;

    width: 200px;
    height: 200px;

    flex-direction: column;
    justify-content: space-around;

    padding: 24px;
    border-radius: 8px;
    border: 1px dashed ${GREY[400]};
  }

  @media screen and (max-width: 1023px) {
    bottom: 0;

    width: 100vw;
    height: 6rem;

    justify-content: space-between;
    align-items: center;

    border-top: 1px solid ${GREY[300]};
  }
`;

const Li = styled.li`
  display: flex;
  flex-direction: column;

  color: ${GREY[700]};

  .material-icons {
    text-align: center;
    font-size: 1.8rem;

    @media screen and (min-width: 1024px) {
      display: none;
    }
  }

  @media screen and (max-width: 1023px) {
    flex: 1;
    justify-content: center;
    align-items: center;
  }
`;

const Label = styled.label`
  font-size: 1.2rem;
`;
