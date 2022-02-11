import React from 'react';

import { BookmarkEditButton } from '.';
import { LabeledText, Section } from 'src/components/common';

import { IBookmark } from 'src/interfaces';

interface IBookmarkInfoCardProps {
  data: IBookmark;
}

function BookmarkInfoCard({ data }: IBookmarkInfoCardProps) {
  const { createdAt, memo } = data;

  return (
      <LabeledText label="생성 시간" value={dayjs(createdAt)?.format('YYYY.MM.DD HH:mm')} />
      <LabeledText label="메모" value={memo} />
    </Section>
  );
}

export default BookmarkInfoCard;
