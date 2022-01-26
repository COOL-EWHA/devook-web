import React from 'react';
import styled from 'styled-components';

import { PostPreviewCard } from 'src/components/posts';
import { BookmarkListSkeleton } from '.';

import { useBookmarkList } from 'src/lib/hooks';
import { BookmarkPreview } from 'src/types';

function BookmarkList() {
  const { data, isLoading, listEndRef } = useBookmarkList();

  return (
    <Wrapper>
      {isLoading && <BookmarkListSkeleton />}
      {data?.pages.map((bookmarks) =>
        bookmarks?.map((bookmark: BookmarkPreview) => {
          const { id, title, thumbnail, description, tags, url } = bookmark;
          return (
            <PostPreviewCard
              key={id}
              bookmarkId={id}
              title={title}
              thumbnail={thumbnail}
              description={description}
              tags={tags}
              url={url}
            />
          );
        }),
      )}
      <div style={{ height: '1rem' }} ref={listEndRef} />
    </Wrapper>
  );
}

export default BookmarkList;

const Wrapper = styled.div``;
