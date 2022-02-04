import React from 'react';
import styled from 'styled-components';

import { PostListSkeleton, PostPreviewCard } from 'src/components/posts';
import { POST_LIST_FETCH_LIMIT } from 'src/constant';

import { BookmarkPreview } from 'src/types';
import { useBookmarkList } from 'src/lib/hooks';

interface IBookmarkListProps {
  isRead?: boolean;
}

function BookmarkList({ isRead }: IBookmarkListProps) {
  const { data, isLoading, listEndRef } = useBookmarkList({ isRead });

  return (
    <Wrapper>
      {isLoading && <PostListSkeleton fetchLimit={POST_LIST_FETCH_LIMIT} />}
      {data?.pages.map((posts) =>
        posts?.map((post: BookmarkPreview) => {
          const { id, title, thumbnail, description, tags, isBookmarked, url, dueDate, isRead } = post;
          return (
            <PostPreviewCard
              key={id}
              type={isRead === undefined ? 'default' : 'toRead'}
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

const Wrapper = styled.div``;
