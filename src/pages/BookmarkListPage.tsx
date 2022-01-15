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

  const handleFixedTagButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleTagSubmit = () => {
    //
  };

  const handleResize = () => {
    // @TO_BE_IMPROVED: debounce 적용
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
      {!isModalOpen && <BookmarkTagList tags={TAG_LIST} isModalOpen={isModalOpen} />}
      {isModalOpen && (
        <Modal setIsModalOpen={setIsModalOpen} onComplete={handleTagSubmit} title="태그 선택">
          <BookmarkTagList tags={TAG_LIST} isModalOpen={isModalOpen} />
        </Modal>
      )}
      <FixedButton buttonType="tag" iconType="tag" onClick={handleFixedTagButtonClick} />
      <FixedButton buttonType="scroll" iconType="expand_less" onClick={handleScrollTopButtonClick} />
    </Wrapper>
  );
}

export default BookmarkListPage;

const BookmarksWrapper = styled.div``;

const Wrapper = styled.div`
  display: flex;
`;
