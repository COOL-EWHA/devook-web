import React from 'react';
import styled from 'styled-components';

import { PostPreviewCard, PostPreviewCardSkeleton } from 'src/components/common';
import { useBookmarkList } from 'src/lib/hooks';
import { BookmarkPreview } from 'src/types';
import { BOOKMARK_FETCH_LIMIT } from 'src/constant';

function BookmarkList() {
  const { data, isLoading, listEndRef } = useBookmarkList();

  if (isLoading) {
    return (
      <SkeletonWrapper>
        {[...Array(BOOKMARK_FETCH_LIMIT)].map((_, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <PostPreviewCardSkeleton key={index} />
        ))}
      </SkeletonWrapper>
    );
  }

  return (
    <Wrapper>
      {data?.pages.map((bookmarks) =>
        bookmarks?.map((bookmark: BookmarkPreview) => {
          const { id, title, thumbnail, description, tags } = bookmark;
          return (
            <PostPreviewCard
              key={id}
              id={id}
              title={title}
              thumbnail={thumbnail}
              description={description}
              tags={tags}
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
const SkeletonWrapper = styled.div``;
