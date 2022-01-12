import React from 'react';
import styled from 'styled-components';

import { MaterialIcon } from 'src/components/common';
import { CACTUS_GREEN } from 'src/styles/colors';

interface INotificationInfoProps {
  isReminderActivated?: boolean;
  readingDueDate?: Date;
}

function NotificationInfo({ isReminderActivated, readingDueDate }: INotificationInfoProps) {
  return (
    <Wrapper>
      <ContentWrapper>
        <MaterialIcon type="calendar_month" width="1.8rem" />
        <Label>{readingDueDate ?? '미리알림'}</Label>
      </ContentWrapper>
      <ContentWrapper>
        <MaterialIcon type="notifications_none" width="1.8rem" />
        <Label>{isReminderActivated ? 'ON' : 'OFF'}</Label>
      </ContentWrapper>
    </Wrapper>
  );
}

export default NotificationInfo;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Label = styled.label`
  font-size: 1.4rem;
  margin-left: 0.4rem;
  color: ${CACTUS_GREEN[500]};
`;

const ContentWrapper = styled.div`
  display: flex;
  margin-right: 1rem;
`;
