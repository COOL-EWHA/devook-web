import React from 'react';
import styled from 'styled-components';

import { PostPreviewCard } from 'src/components/common';
import { useBookmarkList } from 'src/lib/hooks';
import { BookmarkPreview } from 'src/types';

function BookmarkList() {
  const { data, isLoading, listEndRef } = useBookmarkList();

  return (
    <Wrapper>
      {isLoading && <div>loading...</div>}
      {!isLoading &&
        data?.pages.map((bookmarks) =>
          bookmarks?.map((bookmark: BookmarkPreview) => (
            <PostPreviewCard
              key={bookmark.id}
              id={bookmark.id}
              title={bookmark.title}
              thumbnail={bookmark.thumbnail}
              description={bookmark.description}
              tags={bookmark.tags}
            />
          )),
        )}
      <div style={{ height: '1rem' }} ref={listEndRef} />
    </Wrapper>
  );
}

export default BookmarkList;

const Wrapper = styled.div``;
