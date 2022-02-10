import React, { useCallback, useState, lazy, Suspense } from 'react';
import styled from 'styled-components';

const BookmarkActionDropdown = lazy(() => import('src/components/bookmarks/ActionDropdown'));
const BookmarkAddButton = lazy(() => import('src/components/bookmarks/AddButton'));
const IconButton = lazy(() => import('src/components/common/IconButton'));

interface IPostPreviewCardActionMenuProps {
  bookmarkId?: number;
  postId?: number;
  isBookmarked?: boolean;
  dueDate?: string;
  className?: string;
}

export default function PostPreviewCardActionMenu({
  className,
  bookmarkId,
  postId,
  isBookmarked = true,
  dueDate,
}: IPostPreviewCardActionMenuProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMoreButtonClick = useCallback(() => {
    setIsDropdownOpen((prev) => !prev);
  }, []);

  return (
    <Wrapper className={className}>
      <Suspense fallback={null}>
        {bookmarkId && (
          <>
            <MoreButton onClick={handleMoreButtonClick} />
            <BookmarkActionDropdown bookmarkId={bookmarkId} dueDate={dueDate} isOpen={isDropdownOpen} />
          </>
        )}
        {postId && <BookmarkAddButton postId={postId} isBookmarked={isBookmarked} />}
      </Suspense>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-left: auto;
  @media screen and (max-width: 1024px) {
    position: relative;
  }
`;

const MoreButton = styled(IconButton).attrs({
  type: 'primary',
  iconType: 'more_horiz',
})`
  @media screen and (min-width: 1025px) {
    display: none;
  }
`;
