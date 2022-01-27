import React from 'react';
import { useLocation } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { FixedButton, Modal } from 'src/components/common';
import { PostTagList } from 'src/components/posts';

import { usePostTagList } from 'src/lib/hooks';
import { isUserLoggedIn } from 'src/lib/store';

function PostTagListOpenButton() {
  const { pathname } = useLocation();
  const postType = pathname === '/further-read' ? 'post' : 'bookmark';
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
