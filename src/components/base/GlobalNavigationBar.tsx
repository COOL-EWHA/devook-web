import React from 'react';
import styled from 'styled-components';

import { MaterialIcon } from 'src/components/common';

import { GREY } from 'src/styles/colors';
import { NAV_ITEMS } from 'src/constant';

function GlobalNavigationBar() {
  return (
    <Nav>
      <Ul>
        {NAV_ITEMS.map(({ iconType, label }) => (
          <Li key={label}>
            <MaterialIcon type={iconType} width="2.4rem" />
            <Label>{label}</Label>
          </Li>
        ))}
      </Ul>
    </Nav>
  );
}

export default GlobalNavigationBar;

const Nav = styled.nav`
  @media screen and (min-width: 1024px) {
    margin: 6.4rem 2rem 0 0;
  }
`;

const Ul = styled.ul`
  @media screen and (min-width: 1024px) {
    padding: 1.2rem 0;
    border-radius: 0.8rem;
    border: 1px dashed ${GREY[400]};
  }

  @media screen and (max-width: 1023px) {
    position: fixed;
    left: 0;
    bottom: 0;
    display: flex;
    width: 100vw;
    height: 6rem;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid ${GREY[300]};
  }
`;

const Li = styled.li`
  color: ${GREY[700]};

  .material-icons {
    text-align: center;
    font-size: 1.8rem;
  }

  @media screen and (min-width: 1024px) {
    width: 14rem;
    padding: 1.4rem 2rem;
    .material-icons {
      display: none;
    }
  }

  @media screen and (max-width: 1023px) {
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;
    align-items: center;
  }
`;

const Label = styled.label`
  font-size: 1.2rem;
  margin-top: 0.4rem;
`;
