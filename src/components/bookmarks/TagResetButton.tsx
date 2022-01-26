import React from 'react';

import { TagResetButton } from 'src/components/common';
import { bookmarkListFilter } from 'src/lib/store/bookmarks';

function BookmarkTagResetButton() {
  return <TagResetButton filterType={bookmarkListFilter} />;
}

export default BookmarkTagResetButton;
