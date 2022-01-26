import React from 'react';

import { PostList } from 'src/components/posts';
import { useBookmarkList } from 'src/lib/hooks';

function BookmarkList() {
  const { data, isLoading, listEndRef } = useBookmarkList();

  return <PostList data={data} isLoading={isLoading} listEndRef={listEndRef} />;
}

export default BookmarkList;
