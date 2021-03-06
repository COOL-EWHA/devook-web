import React from 'react';
import styled from 'styled-components';

import { PostCardActionMenu } from 'src/components/posts';
import { Img, P, Link } from 'src/components/common';
import { CACTUS_GREEN } from 'src/constant';

interface IPostPreviewCardContentProps {
  postId?: number;
  bookmarkId?: number;
  title: string;
  thumbnail: string;
  description: string;
  tags?: string[];
  isBookmarked?: boolean;
  url: string;
  dueDate?: string;
}

function PostPreviewCardContent({
  postId,
  bookmarkId,
  title,
  thumbnail,
  description,
  tags,
  isBookmarked = true,
  url,
  dueDate,
}: IPostPreviewCardContentProps) {
  return (
    <Wrapper>
      <DetailLink bookmarkId={bookmarkId} url={url}>
        <PWrapper>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </PWrapper>
        <StyledImg src={thumbnail} alt={`글 ${title}의 썸네일 이미지`} />
      </DetailLink>
      <Footer>
        <Row>
          {tags?.map((tag) => (
            <Tag key={tag}>#{tag}</Tag>
          ))}
        </Row>
        <PostCardActionMenu postId={postId} bookmarkId={bookmarkId} isBookmarked={isBookmarked} dueDate={dueDate} />
      </Footer>
    </Wrapper>
  );
}

export default React.memo(PostPreviewCardContent);

type DetailLinkProps = Pick<IPostPreviewCardContentProps, 'bookmarkId' | 'url'> & {
  children: React.ReactNode;
};

function DetailLink({ bookmarkId, url, children }: DetailLinkProps) {
  if (bookmarkId) {
    return <StyledLink to={`/bookmarks/${bookmarkId}`}>{children}</StyledLink>;
  }

  const handleClick = (e?: React.MouseEvent<HTMLAnchorElement>) => {
    if (!window.UrlLaunchChannel) {
      return;
    }
    e?.preventDefault();
    window.UrlLaunchChannel.postMessage(url);
  };

  return (
    <A href={url} target="_blank" onClick={handleClick}>
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
  'data-cy': 'postPreviewCardTitle',
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
  width: 100%;
`;

// eslint-disable-next-line react/jsx-props-no-spreading
const StyledImg = styled((props) => <Img {...props} />).attrs({ width: '7.2rem', height: '7.2rem' })`
  margin-left: 2rem;
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.8rem;
`;

const PWrapper = styled.div`
  max-width: calc(100% - 9.2rem);
`;

const StyledLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 0.4rem;
`;

const A = styled.a`
  text-decoration: none;
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 0.4rem;
`;

const Row = styled.div`
  display: flex;
`;
