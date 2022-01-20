import { atom } from 'recoil';

import { BookmarkListFilter } from 'src/types';

export const bookmarkListFilter = atom<BookmarkListFilter>({
  key: 'bookmarkListFilter',
  default: {
    tags: [],
    q: '',
  },
});
