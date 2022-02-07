import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

import { MaterialIcon, Link } from 'src/components/common';
import { GREY, WHITE, NAV_ITEMS, SUB_ROUTES, CACTUS_GREEN } from 'src/constant';

function GlobalNavigationBar() {
  const { pathname } = useLocation();
  const isSubRoute = !!SUB_ROUTES.find((subRoute) => subRoute.pathname.test(pathname));

  return (
    <Nav isVisible={!isSubRoute}>
      <Ul>
        {NAV_ITEMS.map(({ iconType, label, to }) => (
          <Link to={to} key={label}>
            <Li>
              <MaterialIcon type={iconType} color={pathname === to ? CACTUS_GREEN[500] : GREY[900]} />
              <Label isActive={pathname === to}>{label}</Label>
            </Li>
          </Link>
        ))}
      </Ul>
    </Nav>
  );
}

export default GlobalNavigationBar;

const Nav = styled.nav<{ isVisible: boolean }>`
  @media screen and (min-width: 1025px) {
    width: 14.2rem;
  }
  @media screen and (max-width: 1024px) {
    display: ${({ isVisible }) => !isVisible && 'none'};
  }
`;

const Ul = styled.ul`
  @media screen and (min-width: 1025px) {
    width: 14.2rem;
    padding: 1.2rem 0;
    margin-top: 6.4rem;
    border-radius: 0.8rem;
    border: 1px dashed ${GREY[400]};
  }

  @media screen and (max-width: 1024px) {
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 9;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    height: 6rem;
    background-color: ${WHITE};
    border-top: 1px solid ${GREY[300]};
  }
`;

const Li = styled.li`
  .material-icons {
    text-align: center;
    font-size: 1.8rem;
  }

  @media screen and (min-width: 1025px) {
    width: 14rem;
    padding: 1.2rem 2rem;
    .material-icons {
      display: none;
    }
  }

  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;
    align-items: center;
  }
`;

const Label = styled.label<{ isActive: boolean }>`
  font-size: 1.4rem;
  margin-top: 0.4rem;
  color: ${({ isActive }) => (isActive ? CACTUS_GREEN[500] : GREY[900])};
`;
