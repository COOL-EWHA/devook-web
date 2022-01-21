import React from 'react';
import styled from 'styled-components';

import { CACTUS_GREEN, WHITE } from 'src/constant';
import { useBookmarkTag } from 'src/lib/hooks';

interface IBookmarkTagButtonProps {
  text: string;
  isModalOpen: boolean;
}

export default function BookmarkTagButton({ text, isModalOpen }: IBookmarkTagButtonProps) {
  const { isSelected, setSelectedState: handleClick } = useBookmarkTag(text);

  return (
    <Wrapper isModalOpen={isModalOpen} onClick={handleClick} isSelected={isSelected}>
      <P>#{text}</P>
    </Wrapper>
  );
}

const Wrapper = styled.button<{ isModalOpen: boolean; isSelected: boolean }>`
  max-width: 100%;
  padding: 0.2rem 0.8rem;
  margin: 0 0.4rem 0.8rem 0;
  ${({ isSelected }) => `
  background-color: ${isSelected ? CACTUS_GREEN[100] : WHITE};
  color: ${isSelected ? CACTUS_GREEN[700] : CACTUS_GREEN[500]};
  border: 1px solid ${isSelected ? CACTUS_GREEN[700] : CACTUS_GREEN[500]};
  `}
  border-radius: 0.4rem;

  :hover {
    color: ${CACTUS_GREEN[700]};
    border-color: ${CACTUS_GREEN[700]};
    cursor: pointer;
  }

  transition: all 0.2s;
`;

const P = styled.p`
  font-size: 1.2rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
