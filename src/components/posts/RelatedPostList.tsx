import React from 'react';
import styled from 'styled-components';

import { PostPreviewCard, RelatedPostListSkeleton } from 'src/components/posts';
import { Section } from 'src/components/common';

import { GREY } from 'src/constant';
import { useRelatedPostList } from 'src/lib/hooks';
import { BookmarkPreview } from 'src/types';

function RelatedPostList() {
  const { data, isLoading } = useRelatedPostList();

  return (
    <>
      <Divider />
      <Section title="더 읽어보기">
        {isLoading && <RelatedPostListSkeleton />}
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
  margin-top: 2rem;
  height: 0.8rem;
  @media screen and (max-width: 1024px) {
    margin-right: -2rem;
    margin-left: -2rem;
    background-color: ${GREY[200]};
  }

  @media screen and (min-width: 1025px) {
    background-color: ${GREY[300]};
  }
`;
