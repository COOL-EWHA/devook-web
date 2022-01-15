import React, { useState } from 'react';
import styled from 'styled-components';

import { Button } from 'src/components/common';
import { BookmarkTagButton } from 'src/components/bookmarks';

import { GREY } from 'src/constant';

interface IBookmarkTagListProps {
  tags: string[];
  isModalOpen: boolean;
}

export default function BookmarkTagList({ tags, isModalOpen }: IBookmarkTagListProps) {
  const [isResetButtonClicked, setIsResetButtonClicked] = useState(false);

  const handleClick = () => {
    setIsResetButtonClicked(true);
  };

  return (
    <Wrapper isModalOpen={isModalOpen}>
      <Title>태그 목록</Title>
      <BookmarkTagButtonWrapper>
        {tags.map((tag) => (
          <BookmarkTagButton
            key={tag}
            text={tag}
            isModalOpen={isModalOpen}
            isResetButtonClicked={isResetButtonClicked}
            setIsResetButtonClicked={setIsResetButtonClicked}
          />
        ))}
      </BookmarkTagButtonWrapper>
      <Button iconType="restart_alt" text="초기화" buttonType="line" onClick={handleClick} />
    </Wrapper>
  );
}

const Wrapper = styled.div<{ isModalOpen: boolean }>`
  padding: 2rem 1.6rem;

  @media screen and (min-width: 1025px) {
    width: 20rem;
    height: 100%;
    margin-left: 2.4rem;
    border-radius: 0.8rem;
    background-color: ${GREY[200]};
  }

  @media screen and (max-width: 1024px) {
    ${({ isModalOpen }) => !isModalOpen && 'display:none;'}
  }
`;

const Title = styled.p`
  font-size: 1.8rem;
  margin-bottom: 1.2rem;
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

const BookmarkTagButtonWrapper = styled.div`
  margin-bottom: 1.2rem;
`;