import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { CACTUS_GREEN, GREY, WHITE } from 'src/constant';

interface IBookmarkTagButtonProps {
  text: string;
  isModalOpen: boolean;
  isResetButtonClicked: boolean;
  setIsResetButtonClicked: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function BookmarkTagButton({
  text,
  isModalOpen = false,
  isResetButtonClicked,
  setIsResetButtonClicked,
}: IBookmarkTagButtonProps) {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    setIsSelected((prev) => !prev);
  };

  useEffect(() => {
    if (isResetButtonClicked) {
      setIsSelected(false);
      setIsResetButtonClicked(false);
    }
  }, [isResetButtonClicked]);

  return (
    <Wrapper isModalOpen={isModalOpen} onClick={handleClick} isSelected={isSelected}>
      <P>{text}</P>
    </Wrapper>
  );
}

const Wrapper = styled.button<{ isModalOpen: boolean; isSelected: boolean }>`
  max-width: 100%;
  margin: 0.4rem 0.4rem 0 0;
  border-radius: 0.4rem;
  border: none;
  background-color: ${({ isModalOpen }) => (isModalOpen ? GREY[200] : WHITE)};
  color: ${CACTUS_GREEN[500]};

  :hover {
    background-color: ${({ isModalOpen }) => (isModalOpen ? GREY[300] : GREY[300])};
    cursor: pointer;
  }

  ${({ isSelected }) => isSelected && `background-color:${CACTUS_GREEN[100]};`}

  transition: all 0.2s;
`;

const P = styled.p`
  font-size: 1.4rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
