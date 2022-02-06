import React from 'react';

import { Button } from 'src/components/common';
import { ButtonSize } from 'src/components/common/Button';

interface IBookmarkDueDateSetButtonProps {
  className?: string;
  id: number;
  size?: ButtonSize;
  dueDate?: string;
}

export default function BookmarkDueDateSetButton({
  className,
  id,
  dueDate,
  size = 'medium',
}: IBookmarkDueDateSetButtonProps) {
  return <Button iconType="event_available" text={dueDate || '기한설정'} size={size} className={className} />;
}
