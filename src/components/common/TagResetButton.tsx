import React from 'react';
import { RecoilState, useRecoilState } from 'recoil';

import { Button } from 'src/components/common';

import { PostListFilter } from 'src/types';

interface ITagResetButtonProps {
  filterType: RecoilState<PostListFilter>;
}

function TagResetButton({ filterType }: ITagResetButtonProps) {
  const [filter, setFilter] = useRecoilState(filterType);

  const resetFilter = () => {
    setFilter({ ...filter, tags: [] });
  };

  return <Button iconType="restart_alt" text="초기화" buttonType="line" onClick={resetFilter} />;
}

export default TagResetButton;
