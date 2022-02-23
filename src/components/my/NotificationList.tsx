/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled from 'styled-components';

import { NoResult } from 'src/components/common';
import { BackHeader } from 'src/components/base';
import { NotificationCard } from 'src/components/my';
import { useNotificationList } from 'src/lib/hooks';
import { INotification } from 'src/interfaces';
import { GREY } from 'src/constant';

interface INotificationListProps {
  onBackButtonClick: () => void;
}

function NotificationList({ onBackButtonClick }: INotificationListProps) {
  const { data, listEndRef } = useNotificationList();

  return (
    <Wrapper>
      <BackHeader title="알림 목록" isForSidebar onBack={onBackButtonClick} />
      {data?.pages && data?.pages[0].length === 0 && <NoResult iconType="notifications" target="알림이" />}
      {data?.pages?.map((notifications) =>
        notifications?.map((notification: INotification) => (
          <NotificationCard key={notification.id} {...notification} />
        )),
      )}
      <div ref={listEndRef} style={{ height: '0.1rem' }} />
    </Wrapper>
  );
}

export default React.memo(NotificationList);

const Wrapper = styled.div`
  overflow-y: scroll;
  margin: 3.2rem -2rem -2rem -2rem;
  padding: 0 2rem;
  height: 100%;

  &::-webkit-scrollbar {
    display: flex;
    width: 0.4rem;
    background: none;
  }

  &::-webkit-scrollbar-thumb {
    background: ${GREY[400]};
  }
`;
