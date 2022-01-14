import React, { useState } from 'react';
import styled from 'styled-components';

import { BookmarkActionDropdown } from 'src/components/bookmarks';
import { MaterialIcon } from 'src/components/common';

import { CACTUS_GREEN } from 'src/styles/colors';

interface IPostCardActionMenuProps {
  isBookmarked?: boolean;
}

export default function PostCardActionMenu({ isBookmarked = true }: IPostCardActionMenuProps) {
  const [isDropdownOpen, setIsMenuOpen] = useState(false);

  const handleMoreIconClick = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <Wrapper>
      {isBookmarked && (
        <>
          <MoreIcon onClick={handleMoreIconClick} />
          <BookmarkActionDropdown isOpen={isDropdownOpen} />
        </>
      )}
      {!isBookmarked && <MaterialIcon type="bookmark_border" />}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-left: auto;
  @media screen and (max-width: 1024px) {
    position: relative;
  }
`;

const MoreIcon = styled(MaterialIcon).attrs({
  type: 'more_horiz',
  color: CACTUS_GREEN[500],
  hoverColor: CACTUS_GREEN[700],
})`
  @media screen and (min-width: 1025px) {
    display: none;
  }
`;
