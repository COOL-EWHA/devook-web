import React from 'react';
import { useLocation } from 'react-router-dom';

import { ScrollToTopButton } from 'src/components/common';
import { BookmarkTagListButton } from 'src/components/bookmarks';
import { RecommendedPostTagListButton } from 'src/components/furtherRead';

function FixedButtons() {
  const { pathname } = useLocation();

  return (
    <>
      {pathname === '/further-read' ? <RecommendedPostTagListButton /> : <BookmarkTagListButton />}
      <ScrollToTopButton />
    </>
  );
}

export default FixedButtons;
