import React from 'react';

import { Input } from 'src/components/common';
import { usePostSearch } from 'src/lib/hooks';
import { PostType } from 'src/types';

interface IPostSearchInputProps {
  type?: PostType;
}

function PostSearchInput({ type = 'post' }: IPostSearchInputProps) {
  const { query, handleChange } = usePostSearch(type);
  const placeholder = `${type === 'post' ? '글을' : '북마크를'} 검색해보세요`;

  return <Input iconType="search" placeholder={placeholder} value={query} onChange={handleChange} />;
}
export default PostSearchInput;
