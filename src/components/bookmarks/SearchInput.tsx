import React from 'react';

import { Input } from 'src/components/common';
import { useBookmarkSearch } from 'src/lib/hooks';

function BookmarkSearchInput() {
  const { keyword, handleChange } = useBookmarkSearch();

  return <Input iconType="search" placeholder="북마크를 검색해보세요." value={keyword} onChange={handleChange} />;
}

export default BookmarkSearchInput;
