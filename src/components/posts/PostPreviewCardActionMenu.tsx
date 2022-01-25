import React, { useState } from 'react';
import styled from 'styled-components';

import { BookmarkActionDropdown } from 'src/components/bookmarks';
import { Button } from 'src/components/common';

interface IPostPreviewCardActionMenuProps {
  bookmarkId: number;
  isBookmarked?: boolean;
}

export default function PostPreviewCardActionMenu({
  bookmarkId,
  isBookmarked = true,
}: IPostPreviewCardActionMenuProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMoreButtonClick = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <Wrapper>
      {isBookmarked && (
        <>
          <MoreButton onClick={handleMoreButtonClick} />
          <BookmarkActionDropdown bookmarkId={bookmarkId} isOpen={isDropdownOpen} />
        </>
      )}
      {!isBookmarked && <Button iconType="bookmark_border" />}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-left: auto;
  @media screen and (max-width: 1024px) {
    position: relative;
  }
`;

const MoreButton = styled(Button).attrs({
  iconType: 'more_horiz',
})`
  @media screen and (min-width: 1025px) {
    display: none;
  }
`;
