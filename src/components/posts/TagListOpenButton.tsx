import React, { lazy, Suspense } from 'react';
import styled from 'styled-components';

import { IconButton } from 'src/components/common';
import { PostTagList } from 'src/components/posts';
import { usePostTagList } from 'src/lib/hooks';
import { WHITE, GREY } from 'src/constant';
import { PostType } from 'src/types';

const Modal = lazy(() => import('src/components/common/Modal'));

interface IPostTagListOpenButtonProps {
  postType?: PostType;
  isBookmarkRead?: boolean;
}

function PostTagListOpenButton({ postType = 'post', isBookmarkRead }: IPostTagListOpenButtonProps) {
  const { data, isModalOpen, openModal, closeModal } = usePostTagList({ postType, isBookmarkRead });

  return (
    <>
      <Button onClick={openModal} />
      <Suspense fallback={null}>
        {isModalOpen && (
          <Modal onClose={closeModal} onComplete={closeModal} title="태그 선택">
            <PostTagList isModalOpen={isModalOpen} data={data} postType={postType} />
          </Modal>
        )}
      </Suspense>
      {!isModalOpen && <PostTagList isModalOpen={isModalOpen} data={data} postType={postType} />}
    </>
  );
}

export default PostTagListOpenButton;

const Button = styled(IconButton).attrs({ type: 'primary', iconType: 'tag', iconWidth: '2.2rem' })`
  position: fixed;

  @media screen and (min-width: 1025px) {
    display: none;
  }

  @media screen and (max-width: 1024px) {
    right: 2rem;
    bottom: 12.8rem;
  }

  display: flex;
  justify-content: center;
  align-items: center;

  width: 4rem;
  height: 4rem;

  background-color: ${WHITE};
  border: none;
  border-radius: 50%;
  box-shadow: rgb(0 0 0 / 10%) 0px 4px 6px, rgb(0 0 0 / 15%) 0px 8px 30px, rgb(255 255 255 / 20%) 0px 0px 0px 1px inset !important;

  transition: all 0.3s;
  :hover {
    cursor: pointer;
    background-color: ${GREY[200]};
  }
`;
