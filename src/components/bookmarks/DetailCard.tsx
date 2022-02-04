import React from 'react';
import styled from 'styled-components';

import { BookmarkDeleteButton, BookmarkDueDateSetButton } from 'src/components/bookmarks';
import { P, Button } from 'src/components/common';
import { CACTUS_GREEN } from 'src/constant';

import { IBookmark } from 'src/interfaces';

interface IBookmarkDetailCardProps {
  data: IBookmark;
}

function BookmarkDetailCard({ data }: IBookmarkDetailCardProps) {
  const { id, title, description, thumbnail, tags, url, dueDate } = data;

  const handleImgError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = '/favicon.svg';
  };

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
        <Row>
          {tags?.map((tag) => (
            <Tag key={tag}>#{tag}</Tag>
          ))}
        </Row>
        <DueDateSetButton id={id} dueDate={dueDate} />
        <DeleteButton id={id} />
      </Footer>
      <Button text="글 읽기" type="line" isBlock href={url} />
    </Wrapper>
  );
}

export default BookmarkDetailCard;

const Wrapper = styled.div`
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

const DueDateSetButton = styled(BookmarkDueDateSetButton).attrs({ size: 'large' })`
  margin-left: 0.8rem;
`;

const DeleteButton = styled(BookmarkDeleteButton).attrs({ size: 'large' })`
  margin-left: 0.8rem;
`;

const Row = styled.div`
  display: flex;
  margin-right: auto;
`;
