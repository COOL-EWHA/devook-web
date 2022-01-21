import React from 'react';
import { useRecoilValue } from 'recoil';

import { FixedButton, Modal, TagList } from 'src/components/common';
import { useBookmarkTag } from 'src/lib/hooks';
import { accessToken } from 'src/lib/store';

function TagListButton() {
  const isLoggedIn = !!useRecoilValue(accessToken);
  const { isModalOpen, setIsModalOpen, setModalOpen: handleClick, setModalClose: handleClose } = useBookmarkTag();

  if (!isLoggedIn) return null;

  return (
    <>
      <FixedButton type="tag" iconType="tag" onClick={handleClick} />
      {!isModalOpen && <TagList isModalOpen={isModalOpen} />}
      {isModalOpen && (
        <Modal setIsModalOpen={setIsModalOpen} onComplete={handleClose} title="태그 선택">
          <TagList isModalOpen={isModalOpen} />
        </Modal>
      )}
    </>
  );
}

export default TagListButton;
