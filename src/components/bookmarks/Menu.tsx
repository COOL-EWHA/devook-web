import React from 'react';
import styled from 'styled-components';

import { Button } from 'src/components/common';
import { WHITE } from 'src/styles/colors';

interface IMenuProps {
  isMenuOpen: boolean;
}
function Menu({ isMenuOpen }: IMenuProps) {
  return (
    <SettingMenu isMenuOpen={isMenuOpen}>
      <Button iconType="notifications_none" text="알림설정" iconWidth="1.8rem" />
      <Button iconType="delete_outline" text="삭제" iconWidth="1.8rem" />
    </SettingMenu>
  );
}

export default Menu;

const SettingMenu = styled.div<{ isMenuOpen: boolean }>`
  @keyframes openMenu {
    0% {
      opacity: 0;
      transform: scale(0.8);
    }
    75% {
      opacity: 0.8;
      transform: scale(1.1);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }

  @media screen and (max-width: 1024px) {
    position: absolute;
    top: 2rem;
    right: 0;
    display: ${({ isMenuOpen }) => (isMenuOpen ? 'flex' : 'none')};
    flex-direction: column;
    justify-content: space-evenly;
    width: 11rem;
    height: 7rem;
    padding: 0 1rem;
    background-color: ${WHITE};
    border-radius: 8px;
    box-shadow: rgb(0 0 0 / 20%) 0px 5px 5px -3px, rgb(0 0 0 / 4%) 0px 8px 10px 1px, rgb(0 0 0 / 8%) 0px 3px 14px 2px;
    animation: 0.3s ease-in-out openMenu;
  }
  @media screen and (min-width: 1025px) {
    display: flex;
    justify-content: space-between;
    width: 15rem;
  }
`;
