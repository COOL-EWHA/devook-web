import React from 'react';

import { FixedButton, Modal, TagList } from 'src/components/common';
import { useBookmarkTag } from 'src/lib/hooks';

function TagListButton() {
  const { isModalOpen, setIsModalOpen, setModalOpenState: handleClick, handleTagSubmit } = useBookmarkTag();

  return (
    <>
      <FixedButton type="tag" iconType="tag" onClick={handleClick} />
      {!isModalOpen && <TagList isModalOpen={isModalOpen} />}
      {isModalOpen && (
        <Modal setIsModalOpen={setIsModalOpen} onComplete={handleTagSubmit} title="태그 선택">
          <TagList isModalOpen={isModalOpen} />
        </Modal>
      )}
    </>
  );
}

export default TagListButton;
