import React from 'react';
import { useRecoilState } from 'recoil';

import { Button } from 'src/components/common';

import { bookmarkListFilter } from 'src/lib/store/bookmarks';

function BookmarkTagResetButton() {
  const [filter, setFilter] = useRecoilState(bookmarkListFilter);

  const resetFilter = () => {
    setFilter({ ...filter, tags: [] });
  };

  return <Button iconType="restart_alt" text="초기화" buttonType="line" onClick={resetFilter} iconWidth="1.8rem" />;
}

export default BookmarkTagResetButton;
