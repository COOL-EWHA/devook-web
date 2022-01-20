import React from 'react';
import styled from 'styled-components';

import { P, PostCardActionMenu } from 'src/components/common';
import { CACTUS_GREEN, GREY } from 'src/constant';

interface IPostCardPreviewProps {
  id: number;
  title: string;
  thumbnail: string;
  description: string;
  tags?: string[];
  type?: 'default' | 'todo';
  isBookmarked?: boolean;
}

export default function PostCardPreview({
  id,
  title,
  thumbnail,
  description,
  tags,
  type = 'default',
  isBookmarked = true,
}: IPostCardPreviewProps) {
  return (
    <Wrapper>
      <ContentWrapper>
        <PWrapper>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </PWrapper>
        <Img src={thumbnail} />
      </ContentWrapper>
      <Footer>
        {tags?.map((tag) => (
          <Tag key={tag}>#{tag}</Tag>
        ))}
        {/* @TO_BE_IMPROVED: 나중에 알림설정 API 확정되면 추가
        {type === 'todo' && (
        <NotificationInfoMenu isReminderActivated={isReminderActivated} readingDueDate={readingDueDate} />
        )} */}
        <PostCardActionMenu bookmarkId={id} isBookmarked={isBookmarked} />
      </Footer>
    </Wrapper>
  );
}

const Title = styled(P).attrs({
  fontSize: '1.8rem',
  fontWeight: 500,
  ellipsis: true,
  numOfLines: 1,
})`
  margin-bottom: 0.6rem;
`;

const Description = styled(P).attrs({
  fontSize: '1.4rem',
  height: '3.6rem',
  lineHeight: '1.8rem',
  ellipsis: true,
  numOfLines: 2,
})`
  margin-bottom: 0.4rem;
`;

const Tag = styled(P).attrs({
  color: CACTUS_GREEN[500],
})`
  margin-right: 0.8rem;
`;

const Wrapper = styled.div`
  margin-bottom: 1rem;
  border-bottom: 1px solid ${GREY[300]};
`;

const Img = styled.img`
  object-fit: cover;
  margin-left: 2rem;
  border-radius: 0.4rem;

  @media screen and (min-width: 1025px) {
    width: 8rem;
    height: 8rem;
  }

  @media screen and (max-width: 1024px) {
    width: 6rem;
    height: 6rem;
  }
`;

const Footer = styled.div`
  display: flex;
  margin: 0.8rem 0;
`;

const PWrapper = styled.div``;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
