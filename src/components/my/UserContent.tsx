import React, { useCallback, useState } from 'react';

import { LogoutButton, NotificationList, SidebarHeader, UserProfileCard, WithdrawButton } from '.';

function UserContent() {
  const [type, setType] = useState<'info' | 'notification'>('info');

  const closeNotificationList = useCallback(() => {
    setType('info');
  }, []);

  const openNotificationList = useCallback(() => {
    setType('notification');
  }, []);

  return (
    <>
      {type === 'info' && (
        <>
          <SidebarHeader onNotificationButtonClick={openNotificationList} />
          <UserProfileCard />
          <LogoutButton />
          <WithdrawButton />
        </>
      )}
      {type === 'notification' && <NotificationList onBackButtonClick={closeNotificationList} />}
    </>
  );
}

export default UserContent;
