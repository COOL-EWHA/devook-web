import { atom } from 'recoil';

import { BookmarkListFilter } from 'src/types';

export const bookamrkListFilterDefaultValue = {
  tags: [],
  q: '',
};

export const bookmarkListFilter = atom<BookmarkListFilter>({
  key: 'bookmarkListFilter',
  default: bookamrkListFilterDefaultValue,
});
