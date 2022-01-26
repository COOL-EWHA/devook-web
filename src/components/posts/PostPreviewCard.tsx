import React from 'react';
import styled from 'styled-components';

import { PostPreviewCardActionMenu } from 'src/components/posts';
import { P, Link } from 'src/components/common';
import { CACTUS_GREEN, GREY } from 'src/constant';

interface IPostPreviewCardProps {
  postId?: number;
  bookmarkId?: number;
  title: string;
  thumbnail: string;
  description: string;
  tags?: string[];
  type?: 'default' | 'todo';
  isBookmarked?: boolean;
  url: string;
}

export default function PostPreviewCard({
  postId,
  bookmarkId,
  title,
  thumbnail,
  description,
  tags,
  type = 'default',
  isBookmarked = true,
  url,
}: IPostPreviewCardProps) {
  const handleImgError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = '/favicon.svg';
  };

  return (
    <Wrapper>
      <PostPreviewCardLink bookmarkId={bookmarkId} url={url}>
        <ContentWrapper>
          <PWrapper>
            <Title>{title}</Title>
            <Description>{description}</Description>
          </PWrapper>
          <Img src={thumbnail} onError={handleImgError} />
        </ContentWrapper>
      </PostPreviewCardLink>
      <Footer>
        {tags?.map((tag) => (
          <Tag key={tag}>#{tag}</Tag>
        ))}
        <PostPreviewCardActionMenu postId={postId} bookmarkId={bookmarkId} isBookmarked={isBookmarked} />
      </Footer>
    </Wrapper>
  );
}

type PostPreviewCardLinkProps = Pick<IPostPreviewCardProps, 'bookmarkId' | 'url'> & { children: React.ReactNode };

function PostPreviewCardLink({ bookmarkId, url, children }: PostPreviewCardLinkProps) {
  if (bookmarkId) {
    return <Link to={`/bookmarks/${bookmarkId}`}>{children}</Link>;
  }

  return (
    <A href={url} target="_blank">
      {children}
    </A>
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
  align-items: center;
  margin: 0.8rem 0;
`;

const PWrapper = styled.div`
  max-width: calc(100% - 9.2rem);
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const A = styled.a`
  text-decoration: none;
`;
