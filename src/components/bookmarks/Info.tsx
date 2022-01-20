import React from 'react';

import { LabeledText, Section } from 'src/components/common';
import { useBookmarkDetail } from 'src/lib/hooks';

function BookmarkInfo() {
  const { data, isLoading } = useBookmarkDetail();

  return (
    <>
      {isLoading && <div>loading...</div>}
      {data && (
        <Section title="북마크 정보" isEditable type="secondary">
          <LabeledText label="생성 날짜" value={data?.createdAt.toString()} />
          <LabeledText label="메모" value={data?.memo} />
        </Section>
      )}
    </>
  );
}

export default BookmarkInfo;
