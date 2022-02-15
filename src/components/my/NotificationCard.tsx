import React from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';

import { P, Img, Link } from 'src/components/common';
import { useNotificationEdit } from 'src/lib/hooks';
import { INotification } from 'src/interfaces';
import { CACTUS_GREEN, GREY, WHITE } from 'src/constant';

function NotificationCard({ id, type, message, createdAt, isRead, bookmarkId }: INotification) {
  const { onClick } = useNotificationEdit({ id });

  const to = {
    'no-bookmarks': '/bookmarks',
    'to-read': '/to-read',
    'due-date': `/bookmarks/${bookmarkId}`,
  }[type];

  return (
    <StyledLink to={to} isRead={isRead} onClick={onClick}>
      <StyledImg src="/favicon.svg" alt="devook 로고 이미지" />
      <ContentWrapper>
        <P fontSize="1.4rem">{message}</P>
        <CreatedAt>{dayjs(createdAt).fromNow()}</CreatedAt>
      </ContentWrapper>
    </StyledLink>
  );
}

export default NotificationCard;

const StyledLink = styled(Link)<{ isRead: boolean }>`
  display: flex;
  width: fit-content;
  margin: 0 -2rem;
  padding: 2rem;
  background-color: ${({ isRead }) => (isRead ? WHITE : CACTUS_GREEN[100])};
`;

// eslint-disable-next-line react/jsx-props-no-spreading
const StyledImg = styled((props) => <Img {...props} />).attrs({ width: '3.2rem', height: '3.2rem' })`
  margin-right: 1.2rem;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const CreatedAt = styled(P).attrs({ fontSize: '1.2rem', color: GREY[700] })`
  margin-top: 0.4rem;
`;
