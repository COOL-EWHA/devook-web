import React from 'react';
import styled from 'styled-components';

import { P, MaterialIcon, Button } from 'src/components/common';
import { CACTUS_GREEN } from 'src/constant';

interface IPostCardProps {
  title: string;
  thumbnail: string;
  description: string;
  url?: string;
  tags?: string[];
  isBookmarked?: boolean;
}

function PostCard({ title, thumbnail, description, url, tags, isBookmarked = true }: IPostCardProps) {
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
        <TagsWrapper>
          {tags?.map((tag) => (
            <Tag key={tag}>#{tag}</Tag>
          ))}
        </TagsWrapper>
        {isBookmarked && <MaterialIcon type="delete_outline" color={CACTUS_GREEN[500]} width="2rem" />}
      </Footer>
      <Button text="글 읽기" buttonType="line" isBlock height="3.6rem" />
    </Wrapper>
  );
}

export default PostCard;

const Title = styled(P).attrs({
  fontSize: '1.8rem',
  fontWeight: 500,
  ellipsis: true,
  numOfLines: 1,
})`
  margin-bottom: 0.6rem;
`;

const Description = styled(P).attrs({
  height: '5.4rem',
  lineHeight: '1.8rem',
  ellipsis: true,
  numOfLines: 3,
})`
  margin-bottom: 0.4rem;
`;

const Tag = styled(P).attrs({
  color: CACTUS_GREEN[500],
})`
  margin-right: 0.8rem;
`;

const TagsWrapper = styled.div`
  display: flex;
`;

const Wrapper = styled.div``;

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
  align-items: center;
  justify-content: space-between;
  margin: 0.8rem 0;
`;

const PWrapper = styled.div``;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
