import React from 'react';
import styled from 'styled-components';

import { BookmarkTagButton, BookmarkTagResetButton } from 'src/components/bookmarks';
import { useBookmarkTag } from 'src/lib/hooks';
import { GREY } from 'src/constant';

interface ITagListProps {
  isModalOpen: boolean;
}

export default function TagList({ isModalOpen }: ITagListProps) {
  const { data } = useBookmarkTag();

  return (
    <Wrapper isModalOpen={isModalOpen}>
      <Title>태그 목록</Title>
      <BookmarkTagButtonWrapper>
        {data?.map((tag) => (
          <BookmarkTagButton key={tag} text={tag} />
        ))}
      </BookmarkTagButtonWrapper>
      <BookmarkTagResetButton />
    </Wrapper>
  );
}

const Wrapper = styled.div<{ isModalOpen: boolean }>`
  padding: 2rem 1.6rem;

  @media screen and (min-width: 1025px) {
    width: 24rem;
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
