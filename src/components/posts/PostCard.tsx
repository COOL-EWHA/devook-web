import React from 'react';
import styled from 'styled-components';

import { P, Button, Link } from 'src/components/common';
import { CACTUS_GREEN } from 'src/constant';

import { IPost, IBookmark } from 'src/interfaces';
import { BookmarkAddButton, BookmarkDeleteButton } from 'src/components/bookmarks';

interface IPostCardProps {
  data: IPost | IBookmark;
  bookmarkId?: number;
  postId?: number;
  isBookmarked?: boolean;
}

function PostCard({ data, bookmarkId, postId }: IPostCardProps) {
  const { title, description, thumbnail, tags, url, isBookmarked = true } = data;

  const handleImgError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = '/favicon.svg';
  };

  return (
    <Wrapper to={`/posts/${postId}`} disabled={!postId}>
      <ContentWrapper>
        <PWrapper>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </PWrapper>
        <Img src={thumbnail} alt="북마크한 글의 썸네일 이미지" onError={handleImgError} />
      </ContentWrapper>
      <Footer>
        {tags?.map((tag) => (
          <Tag key={tag}>#{tag}</Tag>
        ))}
        {bookmarkId && <BookmarkDeleteButton bookmarkId={bookmarkId} />}
        {postId && <BookmarkAddButton postId={postId} isBookmarked={isBookmarked} />}
      </Footer>
      <Button text="글 읽기" buttonType="line" isBlock height="3.6rem" href={url} />
    </Wrapper>
  );
}

export default PostCard;

const Wrapper = styled(Link)`
  width: 100%;
`;

const Title = styled(P).attrs({
  fontSize: '2rem',
  fontWeight: 500,
  width: '100%',
})`
  word-wrap: break-word;
  margin-bottom: 1.2rem;
`;

const Description = styled(P).attrs({
  fontSize: '1.6rem',
  ellipsis: true,
  numOfLines: 3,
  width: '100%',
})``;

const Tag = styled(P).attrs({
  color: CACTUS_GREEN[500],
  fontSize: '1.6rem',
})`
  margin-right: 0.8rem;
`;

const Img = styled.img`
  object-fit: cover;
  margin-left: 2rem;
  border-radius: 0.4rem;
  width: 10rem;
  height: 10rem;
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0.8rem 0 1.2rem;
`;

const PWrapper = styled.div`
  max-width: calc(100% - 12rem);
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.2rem;
`;
