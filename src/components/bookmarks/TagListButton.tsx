import React from 'react';
import { useRecoilValue } from 'recoil';

import { FixedButton, Modal, TagList } from 'src/components/common';
import { useBookmarkTagList } from 'src/lib/hooks';
import { isUserLoggedIn } from 'src/lib/store';

function BookmarkTagListButton() {
  const isLoggedIn = useRecoilValue(isUserLoggedIn);
  const { data, isModalOpen, setIsModalOpen, openModal, closeModal } = useBookmarkTagList();

  if (!isLoggedIn) return null;

  return (
    <>
      <FixedButton type="tag" iconType="tag" onClick={openModal} />
      {isModalOpen && (
        <Modal setIsModalOpen={setIsModalOpen} onComplete={closeModal} title="태그 선택">
          <TagList isModalOpen={isModalOpen} data={data} />
        </Modal>
      )}
      {!isModalOpen && <TagList isModalOpen={isModalOpen} data={data} />}
    </>
  );
}

export default BookmarkTagListButton;
