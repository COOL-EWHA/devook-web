import React from 'react';
import styled from 'styled-components';

import { PostPreviewCard, RelatedPostListSkeleton, Section } from '.';
import { useBookmarkRelatedPostList } from 'src/lib/hooks';
import { BookmarkPreview } from 'src/types';
import { GREY } from 'src/constant';

function RelatedPostList() {
  const { data, isLoading } = useBookmarkRelatedPostList();

  if (isLoading) {
    return (
      <>
        <Divider />
        <RelatedPostListSkeleton />
      </>
    );
  }
  return (
    <>
      <Divider />
      <Section title="더 읽어보기">
        {data?.map((post: BookmarkPreview) => {
          const { id, title, thumbnail, description, tags } = post;
          return (
            <PostPreviewCard
              isBookmarked={false}
              key={id}
              id={id}
              title={title}
              thumbnail={thumbnail}
              description={description}
              tags={tags}
            />
          );
        })}
      </Section>
    </>
  );
}

export default RelatedPostList;

const Divider = styled.div`
  @media screen and (max-width: 1024px) {
    height: 0.8rem;
    margin: 0 -2rem;
    background-color: ${GREY[200]};
  }

  @media screen and (min-width: 1025px) {
    height: 0.2rem;
    background-color: ${GREY[300]};
  }
`;
