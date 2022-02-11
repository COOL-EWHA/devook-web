import React from 'react';
import styled from 'styled-components';

import { PostTagButton, PostTagResetButton } from 'src/components/posts';
import { Modal } from 'src/components/common';
import { GREY } from 'src/constant';

import { PostType } from 'src/types';

interface IPostTagListProps {
  data: string[] | undefined;
  postType: PostType;
  isModalOpen: boolean;
  closeModal: () => void;
}

export default function PostTagList({ data, postType, isModalOpen, closeModal }: IPostTagListProps) {
  return (
    <PostTagListWrapper isModalOpen={isModalOpen} closeModal={closeModal}>
      <Title>태그 목록</Title>
      <ButtonsWrapper>
        {data?.map((tag) => (
          <PostTagButton key={tag} text={tag} postType={postType} />
        ))}
      </ButtonsWrapper>
      <PostTagResetButton postType={postType} />
    </PostTagListWrapper>
  );
}

type PostTagListWrapperProps = Pick<IPostTagListProps, 'isModalOpen' | 'closeModal'> & { children?: React.ReactNode };

function PostTagListWrapper({ isModalOpen, closeModal, children }: PostTagListWrapperProps) {
  if (isModalOpen) {
    return (
      <StyledModal title="태그 선택" onClose={closeModal} onComplete={closeModal}>
        {children}
      </StyledModal>
    );
  }
  return <Wrapper>{children}</Wrapper>;
}

// eslint-disable-next-line react/jsx-props-no-spreading
const StyledModal = styled((props) => <Modal {...props} />)`
  padding: 2rem 1.6rem;

  @media screen and (min-width: 1025px) {
    width: 24rem;
    height: 100%;
    margin-left: 2.4rem;
    border-radius: 0.8rem;
    background-color: ${GREY[200]};
  }
`;

const Wrapper = styled.div`
  padding: 2rem 1.6rem;

  @media screen and (min-width: 1025px) {
    width: 24rem;
    height: 100%;
    margin-left: 2.4rem;
    border-radius: 0.8rem;
    background-color: ${GREY[200]};
  }

  @media screen and (max-width: 1024px) {
    display: none;
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
