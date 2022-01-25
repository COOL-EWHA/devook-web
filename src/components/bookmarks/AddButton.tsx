import React from 'react';
import styled from 'styled-components';

import { Button } from 'src/components/common';

import { useBookmarkAdd } from 'src/lib/hooks';

interface IBookmarkAddButtonProps {
  className?: string;
  postId: number;
  showText?: boolean;
  iconWidth?: string;
}

export default function BookmarkAddButton({ className, postId, showText = false, iconWidth }: IBookmarkAddButtonProps) {
  const { onAdd } = useBookmarkAdd(postId);

  return (
    <StyledButton className={className} onClick={onAdd} text={showText ? '북마크추가' : ''} iconWidth={iconWidth} />
  );
}

const StyledButton = styled(Button).attrs({
  iconType: 'bookmark_border',
})`
  margin-left: auto;
`;
