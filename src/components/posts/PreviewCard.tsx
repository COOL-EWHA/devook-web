/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled from 'styled-components';

import { PostPreviewCardContent } from 'src/components/posts';
import { BookmarkIsReadCheckbox } from 'src/components/bookmarks';
import { GREY } from 'src/constant';

interface IPostPreviewCardProps {
  type?: 'default' | 'toRead';
  postId?: number;
  bookmarkId?: number;
  title: string;
  thumbnail: string;
  description: string;
  tags?: string[];
  isBookmarked?: boolean;
  url: string;
  dueDate?: string;
  isRead?: boolean;
}

export default function PostPreviewCard({ type = 'default', isRead, ...contentProps }: IPostPreviewCardProps) {
  const { bookmarkId } = contentProps;

  return (
    <StyledRow>
      {bookmarkId && type === 'toRead' && <BookmarkIsReadCheckbox id={bookmarkId} isRead={isRead} />}
      <PostPreviewCardContent {...contentProps} />
    </StyledRow>
  );
}

const StyledRow = styled.div`
  display: flex;
  margin-bottom: 1rem;
  border-bottom: 1px solid ${GREY[300]};
`;
