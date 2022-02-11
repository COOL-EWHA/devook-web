import React, { useCallback } from 'react';
import { useSetRecoilState } from 'recoil';

import { ResetButton } from 'src/components/common';
import { bookmarkListFilter, postListFilter } from 'src/lib/store';

import { PostType } from 'src/types';

interface IPostTagResetButtonProps {
  postType: PostType;
}

function PostTagResetButton({ postType }: IPostTagResetButtonProps) {
  const listFilter = postType === 'bookmark' ? bookmarkListFilter : postListFilter;
  const setFilter = useSetRecoilState(listFilter);

  const resetFilter = useCallback(() => {
    setFilter((filter) => ({ ...filter, tags: [] }));
  }, []);

  return <ResetButton onClick={resetFilter} />;
}

export default PostTagResetButton;
