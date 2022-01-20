import React from 'react';

import { LabeledText, Section } from 'src/components/common';

interface IBookmarkInfoProps {
  handleEdit?: () => void;
  createdAt: Date;
  memo?: string;
}

function BookmarkInfo({ handleEdit, createdAt, memo }: IBookmarkInfoProps) {
  return (
    <Section title="북마크 정보" handleEdit={handleEdit} type="secondary">
      <LabeledText label="생성 날짜" value={createdAt.toString()} />
      <LabeledText label="메모" value={memo ?? ''} />
    </Section>
  );
}

export default BookmarkInfo;
