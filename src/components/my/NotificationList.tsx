import React from 'react';
import styled from 'styled-components';

import { BackHeader } from 'src/components/base';
import { NotificationCard } from 'src/components/my';
import { useNotificationList } from 'src/lib/hooks';
import { INotification } from 'src/interfaces';

interface INotificationListProps {
  onBackButtonClick: () => void;
}

function NotificationList({ onBackButtonClick }: INotificationListProps) {
  const { data, listEndRef } = useNotificationList();

  return (
    <Wrapper>
      <BackHeader title="알림 목록" isForSidebar onClick={onBackButtonClick} />
      {data?.pages.map((notifications) =>
        notifications?.map((notification: INotification) => (
          // eslint-disable-next-line react/jsx-props-no-spreading
          <NotificationCard key={notification.id} {...notification} />
        )),
      )}
      <div ref={listEndRef} />
    </Wrapper>
  );
}

export default NotificationList;

const Wrapper = styled.div`
  overflow-y: scroll;
  margin: 3.2rem -2rem -2rem -2rem;
  padding: 0 2rem;
`;
