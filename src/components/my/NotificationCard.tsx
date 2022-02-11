import React from 'react';
import styled from 'styled-components';

import { P } from 'src/components/common';
import { useNotificationCard } from 'src/lib/hooks';
import { INotification } from 'src/interfaces';
import { CACTUS_GREEN, GREY, WHITE } from 'src/constant';

function NotificationCard({ id, message, createdAt, isRead, bookmarkId }: INotification) {
  const { onClick, passedDate } = useNotificationCard({ id, message, createdAt, bookmarkId });

  return (
    <Wrapper isRead={isRead} onClick={onClick}>
      <LogoImg src="/favicon.svg" alt="devook 로고 이미지" />
      <ContentWrapper>
        <P fontSize="1.4rem">{message}</P>
        <CreatedAt>{passedDate}일 전</CreatedAt>
      </ContentWrapper>
    </Wrapper>
  );
}

export default NotificationCard;

const Wrapper = styled.div<{ isRead: boolean }>`
  display: flex;
  margin: 0 -2rem;
  padding: 2rem;
  background-color: ${({ isRead }) => (isRead ? WHITE : CACTUS_GREEN[100])};
  cursor: pointer;
`;

const LogoImg = styled.img`
  width: 3.2rem;
  height: fit-content;
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
