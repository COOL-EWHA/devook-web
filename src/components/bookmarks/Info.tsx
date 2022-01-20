import React from 'react';

import { BookmarkEditButton } from '.';
import { LabeledText, Section } from 'src/components/common';
import { useBookmark } from 'src/lib/hooks';

function BookmarkInfo() {
  const { data, isLoading } = useBookmark();

  return (
    <>
      {isLoading && <div>loading...</div>}
      {data && (
        <Section title="북마크 정보" rightComponent={<BookmarkEditButton />} type="secondary">
          <LabeledText label="생성 날짜" value={data.createdAt.toString()} />
          <LabeledText label="메모" value={data.memo} />
        </Section>
      )}
    </>
  );
}

export default BookmarkInfo;
