import React from 'react';
import styled from 'styled-components';

import { CACTUS_GREEN, WHITE } from 'src/constant';

import { usePostTagFilter } from 'src/lib/hooks';
import { PostType } from 'src/types';

interface IPostTagButtonProps {
  text: string;
  postType: PostType;
}

export default function PostTagButton({ text, postType }: IPostTagButtonProps) {
  const { isSelected, toggleSelect: handleClick } = usePostTagFilter(text, postType);

  return (
    <Wrapper onClick={handleClick} isSelected={isSelected}>
      <P>#{text}</P>
    </Wrapper>
  );
}

const Wrapper = styled.button<{ isSelected: boolean }>`
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
