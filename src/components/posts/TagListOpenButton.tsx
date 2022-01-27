import React from 'react';
import { useRecoilValue } from 'recoil';

import { FixedButton, Modal } from 'src/components/common';
import { PostTagList } from 'src/components/posts';

import { usePostTagList } from 'src/lib/hooks';
import { isUserLoggedIn } from 'src/lib/store';
import { PostType } from 'src/types';

interface IPostTagListOpenButtonProps {
  postType?: PostType;
}

function PostTagListOpenButton({ postType = 'post' }: IPostTagListOpenButtonProps) {
  const { data, isModalOpen, setIsModalOpen, openModal, closeModal } = usePostTagList(postType);
  const isLoggedIn = useRecoilValue(isUserLoggedIn);

  if (!isLoggedIn) return null;

  return (
    <>
      <FixedButton type="tag" iconType="tag" onClick={openModal} />
      {isModalOpen && (
        <Modal setIsModalOpen={setIsModalOpen} onComplete={closeModal} title="태그 선택">
          <PostTagList isModalOpen={isModalOpen} data={data} postType={postType} />
        </Modal>
      )}
      {!isModalOpen && <PostTagList isModalOpen={isModalOpen} data={data} postType={postType} />}
    </>
  );
}

export default PostTagListOpenButton;
