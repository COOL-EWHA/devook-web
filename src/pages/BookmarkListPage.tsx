import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import { BookmarkSearchInput, BookmarkTagList } from 'src/components/bookmarks';
import { PostCard, FixedButton, Modal } from 'src/components/common';

import { BOOKMARK_LIST, TAG_LIST } from 'src/constant/mockData';

function BookmarkListPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleScrollTopButtonClick = () => {
    window.scroll({
      behavior: 'smooth',
      top: 0,
    });
  };

  const handleModalOpenState = () => {
    setIsModalOpen(true);
  };

  const handleResize = () => {
    if (window.innerWidth > 1024) {
      setIsModalOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Wrapper>
      <Outlet />
      <BookmarksWrapper>
        <BookmarkSearchInput />
        {BOOKMARK_LIST.map((bookmark) => (
          <PostCard
            key={bookmark.title}
            title={bookmark.title}
            thumbnail={bookmark.thumbnail}
            description={bookmark.description}
            tags={bookmark.tags}
          />
        ))}
      </BookmarksWrapper>
      <FixedButton buttonType="tag" iconType="tag" onClick={handleModalOpenState} />
      <FixedButton buttonType="scroll" iconType="expand_less" onClick={handleScrollTopButtonClick} />
      {!isModalOpen && <BookmarkTagList tags={TAG_LIST} isModalOpen={isModalOpen} />}
      {isModalOpen && (
        <Modal setIsModalOpen={setIsModalOpen} onComplete={handleModalOpenState} title="태그 선택">
          <BookmarkTagList tags={TAG_LIST} isModalOpen={isModalOpen} />
        </Modal>
      )}
    </Wrapper>
  );
}

export default BookmarkListPage;

const BookmarksWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  display: flex;
`;
