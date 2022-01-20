import React from 'react';
import styled from 'styled-components';

import { P, PostCardActionMenu, Link } from 'src/components/common';
import { CACTUS_GREEN, GREY } from 'src/constant';

interface IPostPreviewCardProps {
  id: number;
  title: string;
  thumbnail: string;
  description: string;
  tags?: string[];
  type?: 'default' | 'todo';
  isBookmarked?: boolean;
}

export default function PostPreviewCard({
  id,
  title,
  thumbnail,
  description,
  tags,
  type = 'default',
  isBookmarked = true,
}: IPostPreviewCardProps) {
  return (
    <Wrapper>
      <Link to={`bookmarks/${id}`}>
        <ContentWrapper>
          <PWrapper>
            <Title>{title}</Title>
            <Description>{description}</Description>
          </PWrapper>
          <Img src={thumbnail} />
        </ContentWrapper>
      </Link>
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
  width: '100%',
})`
  margin-bottom: 0.6rem;
`;

const Description = styled(P).attrs({
  fontSize: '1.4rem',
  lineHeight: '2rem',
  ellipsis: true,
  numOfLines: 2,
  width: '100%',
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
  width: 7.2rem;
  height: 7.2rem;
`;

const Footer = styled.div`
  display: flex;
  margin: 0.8rem 0;
`;

const PWrapper = styled.div`
  max-width: calc(100% - 9.2rem);
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
