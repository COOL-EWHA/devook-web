import React from 'react';

import { PostList } from 'src/components/posts';
import { useRecommendedPostList } from 'src/lib/hooks/posts';

function RecommendedPostList() {
  const { data, isLoading, listEndRef } = useRecommendedPostList();

  return <PostList data={data} isLoading={isLoading} listEndRef={listEndRef} />;
}

export default RecommendedPostList;
