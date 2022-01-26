import React from 'react';
import { useLocation } from 'react-router-dom';

import { Input } from 'src/components/common';

interface ISearchInputProps {
  query: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function SearchInput({ query, handleChange }: ISearchInputProps) {
  const { pathname } = useLocation();
  const placeholder = pathname.includes('further-read') ? '글을 검색해보세요' : '북마크를 검색해보세요';

  return <Input iconType="search" placeholder={placeholder} value={query} onChange={handleChange} />;
}

export default SearchInput;
