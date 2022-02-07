import React from 'react';
import { useRecoilValue } from 'recoil';

import { Input } from 'src/components/common';
import { usePostSearch } from 'src/lib/hooks';
import { isUserLoggedIn } from 'src/lib/store';
import { PostType } from 'src/types';

interface IPostSearchInputProps {
  type?: PostType;
}

function PostSearchInput({ type = 'post' }: IPostSearchInputProps) {
  const isLoggedIn = useRecoilValue(isUserLoggedIn);
  const { query, handleChange } = usePostSearch(type);
  const placeholder = `${type === 'post' ? '글을' : '북마크를'} 검색해보세요`;

  if (!isLoggedIn && type === 'bookmark') return null;

  return <Input iconType="search" placeholder={placeholder} value={query} onChange={handleChange} />;
}
export default PostSearchInput;
