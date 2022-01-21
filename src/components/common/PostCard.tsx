import React from 'react';
import styled from 'styled-components';

import { P, MaterialIcon, Button } from 'src/components/common';
import { CACTUS_GREEN } from 'src/constant';
import { useBookmark, useBookmarkDelete } from 'src/lib/hooks';

interface IPostCardProps {
  isBookmarked?: boolean;
}

function PostCard({ isBookmarked = true }: IPostCardProps) {
  const { bookmarkId, data, isLoading } = useBookmark();
  const { onDelete } = useBookmarkDelete(Number(bookmarkId));

  const handleImgError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = '/favicon.svg';
  };

  if (isLoading) return <div>loading...</div>;

  if (!data) return null;

  const { title, description, thumbnail, tags, url } = data;

  return (
    <Wrapper>
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
        {isBookmarked && <DeleteIcon onClick={onDelete} />}
      </Footer>
      <Button text="글 읽기" buttonType="line" isBlock height="3.6rem" href={url} />
    </Wrapper>
  );
}

export default PostCard;

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
})`
  margin-right: 0.8rem;
`;

const Wrapper = styled.div`
  width: 100%;
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

const DeleteIcon = styled(MaterialIcon).attrs({
  type: 'delete_outline',
  color: CACTUS_GREEN[500],
  width: '2rem',
})`
  margin-left: auto;
`;
