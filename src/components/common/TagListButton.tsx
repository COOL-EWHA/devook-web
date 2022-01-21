import React, { useEffect, useState } from 'react';

import { FixedButton, Modal, TagList } from 'src/components/common';

function TagListButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleTagSubmit = () => {
    // @TO_BE_IMPROVED: fetch tag filtering api
  };

  const handleResize = () => {
    // @TO_BE_IMPROVED: debounce 적용
    if (window.innerWidth > 1024) {
      setIsModalOpen(false);
    }
  };

  const handleClick = () => {
    setIsModalOpen(true);
  };

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
