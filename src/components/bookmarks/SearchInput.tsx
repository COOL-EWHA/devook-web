import React, { useCallback, useState } from 'react';
import debounce from 'lodash/debounce';
import { useRecoilState } from 'recoil';

import { Input } from 'src/components/common';
import { bookmarkListFilter } from 'src/lib/store/bookmarks';

function BookmarkSearchInput() {
  const [filter, setFilter] = useRecoilState(bookmarkListFilter);
  const [keyword, setKeyword] = useState('');

  const debounceSearch = useCallback(
    debounce((keyword) => {
      setFilter({ ...filter, q: keyword });
    }, 500),
    [],
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setKeyword(value);
    debounceSearch(value);
  };

  return <Input iconType="search" placeholder="북마크를 검색해보세요." value={keyword} onChange={handleChange} />;
}

export default BookmarkSearchInput;
