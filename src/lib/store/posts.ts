import { atom } from 'recoil';

import { PostListFilter } from 'src/types';

export const postListFilter = atom<PostListFilter>({
  key: 'postListFilter',
  default: {
    tags: [],
    q: '',
  },
});
