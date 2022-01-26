import React from 'react';

import { PostSearchInput } from 'src/components/posts';
import { useBookmarkSearch } from 'src/lib/hooks';

function BookmarkSearchInput() {
  const { query, handleChange } = useBookmarkSearch();

  return <PostSearchInput query={query} handleChange={handleChange} />;
}

export default BookmarkSearchInput;
