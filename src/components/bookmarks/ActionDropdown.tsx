import React from 'react';
import styled from 'styled-components';

import { Button } from 'src/components/common';
import { WHITE } from 'src/constant';

import { BookmarkDeleteButton } from '.';

interface IBookmarkActionDropdownProps {
  bookmarkId: number;
  isOpen: boolean;
}

function BookmarkActionDropdown({ bookmarkId, isOpen }: IBookmarkActionDropdownProps) {
  return (
    <Wrapper isOpen={isOpen}>
      <Button iconType="notifications_none" text="알림설정" />
      <BookmarkDeleteButton id={bookmarkId} />
    </Wrapper>
  );
}

export default BookmarkActionDropdown;

const Wrapper = styled.div<{ isOpen: boolean }>`
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
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    width: 10.6rem;
    padding: 1.2rem;
    background-color: ${WHITE};
    border-radius: 0.8rem;
    box-shadow: rgb(0 0 0 / 20%) 0px 5px 5px -3px, rgb(0 0 0 / 4%) 0px 8px 10px 1px, rgb(0 0 0 / 8%) 0px 3px 14px 2px;
    animation: 0.3s ease-in-out openMenu;
    & > :first-child {
      margin-bottom: 0.8rem;
    }
  }
  @media screen and (min-width: 1025px) {
    display: flex;
    & > :first-child {
      margin-right: 1.2rem;
    }
  }
`;
