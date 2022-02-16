import React from 'react';
import styled from 'styled-components';

import { NoResult } from 'src/components/common';
import { PostListSkeleton, PostPreviewCard } from 'src/components/posts';
import { useBookmarkList } from 'src/lib/hooks';
import { BookmarkPreview } from 'src/types';
import { POST_LIST_FETCH_LIMIT } from 'src/constant';

interface IBookmarkListProps {
  isRead?: boolean;
}

function BookmarkList({ isRead = undefined }: IBookmarkListProps) {
  const { data, isLoading, listEndRef, noResultIconType, noResultTarget } = useBookmarkList({ isRead });
  const previewCardType = isRead === undefined ? 'default' : 'toRead';

  return (
    <Wrapper>
      {isLoading && <PostListSkeleton fetchLimit={POST_LIST_FETCH_LIMIT} />}
      {data?.pages[0].length === 0 && <NoResult iconType={noResultIconType} target={noResultTarget} />}
      {data?.pages.map((bookmarks) =>
        bookmarks?.map((bookmark: BookmarkPreview) => {
          const { id, title, thumbnail, description, tags, isBookmarked, url, dueDate, isRead } = bookmark;
          return (
            <PostPreviewCard
              key={id}
              type={previewCardType}
              bookmarkId={id}
              title={title}
              thumbnail={thumbnail}
              description={description}
              tags={tags}
              isBookmarked={isBookmarked}
              url={url}
              isRead={isRead}
              dueDate={dueDate}
            />
          );
        }),
      )}
      <div style={{ height: '1rem' }} ref={listEndRef} />
    </Wrapper>
  );
}

export default BookmarkList;

const Wrapper = styled.div`
  height: 100%;
`;
