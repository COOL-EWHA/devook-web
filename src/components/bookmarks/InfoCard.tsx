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
    <Section title="북마크 정보" rightComponent={<BookmarkEditButton />} type="secondary">
      <LabeledText label="생성 날짜" value={createdAt.toString()} />
      <LabeledText label="메모" value={memo} />
    </Section>
  );
}

export default BookmarkInfoCard;
