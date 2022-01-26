import React from 'react';
import styled from 'styled-components';

import { Button } from 'src/components/common';

import { useBookmarkAdd } from 'src/lib/hooks';

interface IBookmarkAddButtonProps {
  className?: string;
  postId: number;
  isBookmarked: boolean;
}

export default function BookmarkAddButton({ className, postId, isBookmarked }: IBookmarkAddButtonProps) {
  const { onAdd } = useBookmarkAdd(postId);

  const [iconType, text] = isBookmarked ? ['bookmark', '북마크 추가됨'] : ['bookmark_border', '북마크 추가'];

  return <StyledButton className={className} iconType={iconType} onClick={onAdd} text={text} disabled={isBookmarked} />;
}

const StyledButton = styled(Button)`
  margin-left: auto;
`;
