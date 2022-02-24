import { atom } from 'recoil';

import { PostListFilter } from 'src/types';

export const postListFilterDefaultValue = {
  tags: [],
  q: '',
};

export const postListFilter = atom<PostListFilter>({
  key: 'postListFilter',
  default: postListFilterDefaultValue,
});
