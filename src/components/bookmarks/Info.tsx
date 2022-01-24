import React from 'react';

import { BookmarkEditButton, BookmarkInfoSkeleton } from '.';
import { LabeledText, Section } from 'src/components/common';
import { useBookmark } from 'src/lib/hooks';

function BookmarkInfo() {
  const { data, isLoading } = useBookmark();

  if (isLoading) {
    return <BookmarkInfoSkeleton />;
  }

  return (
    <Section title="북마크 정보" rightComponent={<BookmarkEditButton />} type="secondary">
      <LabeledText label="생성 날짜" value={data?.createdAt.toString()} />
      <LabeledText label="메모" value={data?.memo} />
    </Section>
  );
}

export default BookmarkInfo;
