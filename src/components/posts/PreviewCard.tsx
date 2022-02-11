/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled from 'styled-components';

import { PostPreviewCardContent } from 'src/components/posts';
import { Checkbox } from 'src/components/common';
import { GREY } from 'src/constant';

import { useBookmarkIsReadEdit } from 'src/lib/hooks';

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

function PostPreviewCard({ type = 'default', isRead, ...contentProps }: IPostPreviewCardProps) {
  const { bookmarkId } = contentProps;
  const { toggle } = useBookmarkIsReadEdit({ id: bookmarkId, isRead });

  return (
    <StyledRow>
      {bookmarkId && type === 'toRead' && (
        <CheckboxWrapper>
          <Checkbox id={String(bookmarkId)} isChecked={isRead} toggle={toggle} />
        </CheckboxWrapper>
      )}
      <PostPreviewCardContent {...contentProps} />
    </StyledRow>
  );
}

export default React.memo(PostPreviewCard);

const StyledRow = styled.div`
  display: flex;
  margin-bottom: 1rem;
  border-bottom: 1px solid ${GREY[300]};
`;

const CheckboxWrapper = styled.div`
  margin: 0.2rem 0.8rem 0 0;
`;
