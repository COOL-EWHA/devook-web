import React from 'react';
import styled from 'styled-components';

import { PostPreviewCard } from 'src/components/posts';
import { PostListSkeleton } from '.';
import { POST_LIST_FETCH_LIMIT } from 'src/constant';

import { BookmarkPreview, PostPreview, PostType } from 'src/types';
import { usePostList } from 'src/lib/hooks';

interface IPostListProps {
  type?: PostType;
  isForToRead?: boolean;
}

function PostList({ type = 'post', isForToRead = false }: IPostListProps) {
  const { data, isLoading, listEndRef } = usePostList(type);

  if (isForToRead) {
    return (
      <Wrapper>
        {isLoading && <PostListSkeleton fetchLimit={POST_LIST_FETCH_LIMIT} />}
        {data?.pages.map((posts) =>
          posts?.map((post: BookmarkPreview) => {
            const { id, title, thumbnail, description, tags, isBookmarked, url, dueDate, isRead } = post;
            return (
              <PostPreviewCard
                type="toRead"
                key={id}
                postId={type === 'post' ? id : undefined}
                bookmarkId={type === 'bookmark' ? id : undefined}
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

  return (
    <Wrapper>
      {isLoading && <PostListSkeleton fetchLimit={POST_LIST_FETCH_LIMIT} />}
      {data?.pages.map((posts) =>
        posts?.map((post: PostPreview) => {
          const { id, title, thumbnail, description, tags, isBookmarked, url } = post;
          return (
            <PostPreviewCard
              key={id}
              bookmarkId={type === 'bookmark' ? id : undefined}
              postId={type === 'post' ? id : undefined}
              title={title}
              thumbnail={thumbnail}
              description={description}
              tags={tags}
              isBookmarked={isBookmarked}
              url={url}
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
