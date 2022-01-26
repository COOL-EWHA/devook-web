import React from 'react';
import { InfiniteData } from 'react-query';
import styled from 'styled-components';

import { PostListSkeleton } from '.';
import { PostPreviewCard } from 'src/components/common';
import { PostPreview } from 'src/types';
import { BOOKMARK_FETCH_LIMIT } from 'src/constant';

interface IPostListProps {
  isLoading: boolean;
  data?: InfiniteData<PostPreview[]>;
  listEndRef: (node?: Element | null | undefined) => void;
  fetchLimit?: number;
}

function PostList({ isLoading, data, listEndRef, fetchLimit = BOOKMARK_FETCH_LIMIT }: IPostListProps) {
  return (
    <Wrapper>
      {isLoading && <PostListSkeleton fetchLimit={fetchLimit} />}
      {data?.pages.map((posts) =>
        posts?.map((post: PostPreview) => {
          const { id, title, thumbnail, description, tags } = post;
          return (
            <PostPreviewCard
              key={id}
              id={id}
              title={title}
              thumbnail={thumbnail}
              description={description}
              tags={tags}
              isBookmarked={false}
            />
          );
        }),
      )}
      <div style={{ height: '1rem' }} ref={listEndRef} />
    </Wrapper>
  );
}

export default PostList;

const Wrapper = styled.div``;
