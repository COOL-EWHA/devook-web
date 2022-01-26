import React from 'react';
import { useRecoilValue } from 'recoil';

import { FixedButton, Modal, TagList } from 'src/components/common';
import { useRecommendedPostTagList } from 'src/lib/hooks';
import { isUserLoggedIn } from 'src/lib/store';

function RecommendedPostTagListButton() {
  const isLoggedIn = useRecoilValue(isUserLoggedIn);
  const { data, isModalOpen, setIsModalOpen, openModal, closeModal } = useRecommendedPostTagList();

  if (!isLoggedIn) return null;

  return (
    <>
      <FixedButton type="tag" iconType="tag" onClick={openModal} />
      {isModalOpen && (
        <Modal setIsModalOpen={setIsModalOpen} onComplete={closeModal} title="태그 선택">
          <TagList isModalOpen={isModalOpen} data={data} type="post" />
        </Modal>
      )}
      {!isModalOpen && <TagList isModalOpen={isModalOpen} data={data} type="post" />}
    </>
  );
}

export default RecommendedPostTagListButton;
