import React from 'react';
import styled from 'styled-components';

import { BookmarkDeleteButton, BookmarkDueDateSetButton } from '.';
import { MenuSize } from 'src/components/posts/CardActionMenu';
import { WHITE } from 'src/constant';

interface IBookmarkActionMenuProps {
  bookmarkId: number;
  isOpen: boolean;
  dueDate?: string;
  size: MenuSize;
}

function BookmarkActionMenu({ bookmarkId, isOpen, dueDate, size }: IBookmarkActionMenuProps) {
  return (
    <Wrapper isOpen={isOpen}>
      <BookmarkDueDateSetButton id={bookmarkId} dueDate={dueDate} size={size} />
      <BookmarkDeleteButton id={bookmarkId} size={size} />
    </Wrapper>
  );
}

export default BookmarkActionMenu;

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
    white-space: nowrap;
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
