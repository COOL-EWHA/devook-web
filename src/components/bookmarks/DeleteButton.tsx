import React from 'react';
import styled from 'styled-components';

import { Button } from 'src/components/common';

import { useBookmarkDelete } from 'src/lib/hooks';

interface IBookmarkDeleteButtonProps {
  className?: string;
  id: number;
}

export default function BookmarkDeleteButton({ className, id }: IBookmarkDeleteButtonProps) {
  const { onDelete } = useBookmarkDelete(id);

  return <StyledButton className={className} onClick={onDelete} />;
}

const StyledButton = styled(Button).attrs({
  iconType: 'delete_outline',
  text: '삭제',
})``;
