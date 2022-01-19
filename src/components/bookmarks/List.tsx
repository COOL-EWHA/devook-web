import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';

import { PostCard } from 'src/components/common';
import { useBookmarkList } from 'src/lib/hooks';
import { BookmarkPreview } from 'src/types';

function BookmarkList() {
  const { ref, inView } = useInView({
    threshold: 0,
  });
  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } = useBookmarkList();

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView]);

  return (
    <Wrapper>
      {isLoading ? (
        // @TO_BE_IMPROVED: 후에 스켈레톤 추가
        <div>loading...</div>
      ) : (
        data?.pages.map((bookmarks) =>
          bookmarks?.map((bookmark: BookmarkPreview) => (
            <PostCard
              key={bookmark.id}
              id={bookmark.id}
              title={bookmark.title}
              thumbnail={bookmark.thumbnail}
              description={bookmark.description}
              tags={bookmark.tags}
            />
          )),
        )
      )}
      <div style={{ height: '1rem' }} ref={ref} />
    </Wrapper>
  );
}

export default BookmarkList;

const Wrapper = styled.div``;
