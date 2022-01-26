import React from 'react';
import styled from 'styled-components';

import { Button } from 'src/components/common';

import { useBookmarkDelete } from 'src/lib/hooks';

interface IBookmarkDeleteButtonProps {
  className?: string;
  bookmarkId: number;
}

export default function BookmarkDeleteButton({ className, bookmarkId }: IBookmarkDeleteButtonProps) {
  const { onDelete } = useBookmarkDelete(bookmarkId);

  return <StyledButton className={className} onClick={onDelete} />;
}

const StyledButton = styled(Button).attrs({
  iconType: 'delete_outline',
  text: '삭제',
})``;
