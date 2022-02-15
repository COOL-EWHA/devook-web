import React from 'react';
import styled from 'styled-components';

import { PostPreviewCard } from 'src/components/posts';
import { PostListSkeleton } from '.';
import { POST_LIST_FETCH_LIMIT } from 'src/constant';

import { PostPreview } from 'src/types';
import { usePostList } from 'src/lib/hooks';
import { EmptyContent } from '../common';

function PostList() {
  const { data, isLoading, listEndRef, emptyTargetIconType, emptyTarget } = usePostList();

  return (
    <Wrapper>
      {isLoading && <PostListSkeleton fetchLimit={POST_LIST_FETCH_LIMIT} />}
      {data?.pages.map((posts) => {
        if (data.pages.length === 1 && posts.length === 0) {
          return <EmptyContent iconType={emptyTargetIconType} target={emptyTarget} />;
        }
        return posts?.map((post: PostPreview) => {
          const { id, title, thumbnail, description, tags, isBookmarked, url } = post;
          return (
            <PostPreviewCard
              key={id}
              postId={id}
              title={title}
              thumbnail={thumbnail}
              description={description}
              tags={tags}
              isBookmarked={isBookmarked}
              url={url}
            />
          );
        });
      })}
      <div style={{ height: '1rem' }} ref={listEndRef} />
    </Wrapper>
  );
}

export default PostList;

const Wrapper = styled.div`
  height: 100%;
`;
