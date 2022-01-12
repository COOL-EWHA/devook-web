import React, { useState } from 'react';
import styled, { css } from 'styled-components';

import { MaterialIcon } from 'src/components/common';
import { Menu } from 'src/components/bookmarks';

import { CACTUS_GREEN, GREY } from 'src/styles/colors';
import NotificationInfoMenu from './NotificationInfo';

interface IBookmarkCardProps {
  title: string;
  thumbnail: string;
  description: string;
  tags: string[];
  isReminderActivated?: boolean;
  readingDueDate?: Date;
  type?: 'my' | 'recommended' | 'readingManagement';
}

export default function BookmarkCard({
  title,
  thumbnail,
  description,
  tags,
  isReminderActivated,
  readingDueDate,
  type = 'my',
}: IBookmarkCardProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMoreIconClick = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <Wrapper>
      <ContentsWrapper>
        <PBlock>
          <P type="title">{title}</P>
          <P type="description">{description}</P>
        </PBlock>
        <Img src={thumbnail} />
      </ContentsWrapper>
      <FooterBlock>
        <InfoWrapper>
          {type !== 'readingManagement' && tags.map((tag) => <P type="tag">#{tag}</P>)}
          {type === 'readingManagement' && (
            <NotificationInfoMenu isReminderActivated={isReminderActivated} readingDueDate={readingDueDate} />
          )}
        </InfoWrapper>
        <MenuWrapper>
          {type !== 'recommended' && (
            <>
              <MoreIcon onClick={handleMoreIconClick} />
              <Menu isMenuOpen={isMenuOpen} />
            </>
          )}
          {type === 'recommended' && <MaterialIcon type="bookmark_border" />}
        </MenuWrapper>
      </FooterBlock>
    </Wrapper>
  );
}

type PStyleType = 'title' | 'description' | 'tag';

const getPStyle = (type: PStyleType) => {
  switch (type) {
    case 'title':
      return css`
        font-size: 1.6rem;
        font-weight: 500;
        margin-bottom: 0.6rem;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        word-wrap: break-word;
        height: 2rem;
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
        font-size: 1.4rem;
        color: ${CACTUS_GREEN[500]};
        margin-right: 0.8rem;
      `;
    default:
      return null;
  }
};

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

const FooterBlock = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0.8rem 0;
`;

const MenuWrapper = styled.div`
  @media screen and (max-width: 1024px) {
    position: relative;
  }
`;

const PBlock = styled.div``;

const ContentsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const InfoWrapper = styled.div`
  display: flex;
`;

const MoreIcon = styled(MaterialIcon).attrs({
  type: 'more_horiz',
  color: CACTUS_GREEN[500],
  hoverColor: CACTUS_GREEN[700],
})`
  @media screen and (min-width: 1025px) {
    display: none;
  }
`;
