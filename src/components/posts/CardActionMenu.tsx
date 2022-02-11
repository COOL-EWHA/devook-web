import React, { useCallback, useState, lazy, Suspense } from 'react';
import styled from 'styled-components';

const BookmarkActionMenu = lazy(() => import('src/components/bookmarks/ActionMenu'));
const BookmarkAddButton = lazy(() => import('src/components/bookmarks/AddButton'));
const IconButton = lazy(() => import('src/components/common/IconButton'));

export type MenuSize = 'medium' | 'large';

interface IPostCardActionMenuProps {
  bookmarkId?: number;
  postId?: number;
  isBookmarked?: boolean;
  dueDate?: string;
  className?: string;
  size?: MenuSize;
}

export default function PostCardActionMenu({
  className,
  bookmarkId,
  postId,
  isBookmarked = true,
  dueDate,
  size = 'medium',
}: IPostCardActionMenuProps) {
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
            <BookmarkActionMenu size={size} bookmarkId={bookmarkId} dueDate={dueDate} isOpen={isDropdownOpen} />
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
