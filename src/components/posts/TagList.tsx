import React from 'react';
import styled from 'styled-components';

import { PostTagButton, PostTagResetButton } from 'src/components/posts';
import { GREY } from 'src/constant';

import { PostType } from 'src/types';

interface IPostTagListProps {
  isModalOpen: boolean;
  data: string[] | undefined;
  postType: PostType;
}

export default function PostTagList({ isModalOpen, data, postType }: IPostTagListProps) {
  return (
    <Wrapper isModalOpen={isModalOpen}>
      <Title>태그 목록</Title>
      <ButtonsWrapper>
        {data?.map((tag) => (
          <PostTagButton key={tag} text={tag} postType={postType} />
        ))}
      </ButtonsWrapper>
      <PostTagResetButton postType={postType} />
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
    ${({ isModalOpen }) => !isModalOpen && 'display: none;'}
  }
`;

const Title = styled.p`
  font-size: 1.8rem;
  margin-bottom: 1.2rem;
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

const ButtonsWrapper = styled.div`
  margin-bottom: 1.2rem;
`;
