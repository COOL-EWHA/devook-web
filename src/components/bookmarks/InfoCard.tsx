import React from 'react';
import dayjs from 'dayjs';

import { BookmarkEditButton } from '.';
import { LabeledText, Section } from 'src/components/common';

import { IBookmark } from 'src/interfaces';

interface IBookmarkInfoCardProps {
  data: IBookmark;
}

function BookmarkInfoCard({ data }: IBookmarkInfoCardProps) {
  const { id, createdAt, memo } = data;
  const formattedCreatedAt = dayjs(createdAt)?.format('YYYY.MM.DD HH:mm');

  return (
    <Section
      title="북마크 정보"
      rightComponent={<BookmarkEditButton id={id} createdAt={formattedCreatedAt} memo={memo} />}
      type="secondary"
    >
      <LabeledText label="생성 시간" value={formattedCreatedAt} />
      <LabeledText label="메모" value={memo} />
    </Section>
  );
}

export default BookmarkInfoCard;
