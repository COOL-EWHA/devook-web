import React from 'react';
import styled from 'styled-components';

import { P, MaterialIcon, Button } from 'src/components/common';
import { CACTUS_GREEN } from 'src/constant';
import { useBookmarkDetail, useBookmarkDelete } from 'src/lib/hooks';

interface IPostCardProps {
  isBookmarked?: boolean;
}

function PostCard({ isBookmarked = true }: IPostCardProps) {
  const { bookmarkId, data, isLoading } = useBookmarkDetail();
  const { onDelete } = useBookmarkDelete(Number(bookmarkId));

  return (
    <>
      {isLoading && <div>loading...</div>}
      {data && (
        <Wrapper>
          <ContentWrapper>
            <PWrapper>
              <Title>{data.title}</Title>
              <Description>{data.description}</Description>
            </PWrapper>
            <Img src={data.thumbnail} />
          </ContentWrapper>
          <Footer>
            <TagsWrapper>
              {data.tags?.map((tag) => (
                <Tag key={tag}>#{tag}</Tag>
              ))}
            </TagsWrapper>
            {isBookmarked && (
              <MaterialIcon type="delete_outline" color={CACTUS_GREEN[500]} width="2rem" onClick={onDelete} />
            )}
          </Footer>
          <Button text="글 읽기" buttonType="line" isBlock height="3.6rem" href={data.url} />
        </Wrapper>
      )}
    </>
  );
}

export default PostCard;

const Title = styled(P).attrs({
  fontSize: '2rem',
  fontWeight: 500,
})`
  margin-bottom: 1.2rem;
`;

const Description = styled(P).attrs({
  fontSize: '1.6rem',
  ellipsis: true,
  numOfLines: 3,
})``;

const Tag = styled(P).attrs({
  color: CACTUS_GREEN[500],
})`
  margin-right: 0.8rem;
`;

const TagsWrapper = styled.div`
  display: flex;
`;

const Wrapper = styled.div`
  width: 100%;
`;

const Img = styled.img`
  object-fit: cover;
  margin-left: 2rem;
  border-radius: 0.4rem;

  width: 11.2rem;
  height: 11.2rem;
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0.8rem 0 1.2rem;
`;

const PWrapper = styled.div``;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 1.2rem;
`;
