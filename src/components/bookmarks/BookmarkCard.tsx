import React from 'react';
import { CACTUS_GREEN, GREY, WHITE } from 'src/styles/colors';
import styled, { css } from 'styled-components';

type PStyleType = 'title' | 'description' | 'tag';

const getPStyle = (type: PStyleType) => {
  switch (type) {
    case 'title':
      return css`
        font-size: 1.4rem;
        font-weight: 500;
        margin-bottom: 0.4rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      `;
    case 'description':
      return css`
        font-size: 1.2rem;
        margin-bottom: 0.4rem;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        word-wrap: break-word;
        line-height: 1.8rem;
        height: 3.6rem;
      `;
    case 'tag':
      return css`
        font-size: 1.2rem;
        color: ${CACTUS_GREEN[500]};
      `;
    default:
      return null;
  }
};

interface IBookmarkCardProps {
  title: string;
  thumbnail: string;
  description: string;
  tags: string[];
}

export default function BookmarkCard({ title, thumbnail, description, tags }: IBookmarkCardProps) {
  return (
    <Wrapper>
      <ContentBlock>
        <PBlock>
          <P type="title">{title}</P>
          <P type="description">{description}</P>
        </PBlock>
        <Img src={thumbnail} />
      </ContentBlock>
      <FooterBlock>
        <TagsWrapper>
          {tags.map((tag) => (
            <P type="tag">{tag}</P>
          ))}
        </TagsWrapper>
        <SettingMenu />
      </FooterBlock>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-bottom: 1rem;
  border-bottom: 1px solid ${GREY[300]};
`;

const P = styled.p<{ type: PStyleType }>`
  ${({ type }) => getPStyle(type)};
`;

const Img = styled.img`
  object-fit: cover;
  margin-left: 2rem;
  @media screen and (min-width: 1025px) {
    width: 8rem;
    height: 8rem;
  }

  @media screen and (max-width: 1024px) {
    width: 6rem;
    height: 6rem;
  }
`;

const SettingMenu = styled.div`
  // @TO_BE_IMPROVED: 메뉴 컴포넌트 만든후에 대체하기
`;

const FooterBlock = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const ContentBlock = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`;

const TagsWrapper = styled.div`
  display: flex;
`;
