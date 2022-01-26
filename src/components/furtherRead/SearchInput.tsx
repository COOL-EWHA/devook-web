import React from 'react';

import { PostSearchInput } from 'src/components/posts';
import { useRecommendedPostSearch } from 'src/lib/hooks';

function SearchInput() {
  const { query, handleChange } = useRecommendedPostSearch();

  return <PostSearchInput query={query} handleChange={handleChange} />;
}

export default SearchInput;
