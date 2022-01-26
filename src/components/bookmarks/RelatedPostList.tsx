import React from 'react';
import styled from 'styled-components';

import { BookmarkRelatedPostListSkeleton } from '.';
import { PostPreviewCard } from 'src/components/posts';
import { Section } from 'src/components/common';

import { GREY } from 'src/constant';
import { useRelatedPostList } from 'src/lib/hooks';
import { BookmarkPreview } from 'src/types';

interface IBookmarkRelatedPostListProps {
  bookmarkId: number;
}

function BookmarkRelatedPostList({ bookmarkId }: IBookmarkRelatedPostListProps) {
  const { data, isLoading } = useRelatedPostList(bookmarkId);

  return (
    <>
      <Divider />
      <Section title="더 읽어보기">
        {isLoading && <BookmarkRelatedPostListSkeleton />}
        {data?.map((post: BookmarkPreview) => {
          const { id, title, thumbnail, description, tags, isBookmarked, url } = post;
          return (
            <PostPreviewCard
              key={id}
              postId={id}
              isBookmarked={isBookmarked}
              title={title}
              thumbnail={thumbnail}
              description={description}
              tags={tags}
              url={url}
            />
          );
        })}
      </Section>
    </>
  );
}

export default BookmarkRelatedPostList;

const Divider = styled.div`
  margin-top: 2rem;
  background-color: ${GREY[200]};
  @media screen and (max-width: 1024px) {
    margin-right: -2rem;
    margin-left: -2rem;
    height: 0.8rem;
  }

  @media screen and (min-width: 1025px) {
    height: 0.4rem;
  }
`;
