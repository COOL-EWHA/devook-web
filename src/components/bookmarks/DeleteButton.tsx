import React from 'react';

import { Button } from 'src/components/common';
import { ButtonSize } from 'src/components/common/Button';

import { useBookmarkDelete } from 'src/lib/hooks';

interface IBookmarkDeleteButtonProps {
  className?: string;
  id: number;
  size?: ButtonSize;
}

export default function BookmarkDeleteButton({ className, id, size = 'medium' }: IBookmarkDeleteButtonProps) {
  const { onDelete } = useBookmarkDelete(id);

  return <Button iconType="delete_outline" text="삭제" size={size} className={className} onClick={onDelete} />;
}
