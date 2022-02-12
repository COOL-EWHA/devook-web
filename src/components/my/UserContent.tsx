import React, { useCallback, useState } from 'react';

import { NotificationList, UserInfo } from '.';

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
      {type === 'info' && <UserInfo onNotificationButtonClick={openNotificationList} />}
      {type === 'notification' && <NotificationList onBackButtonClick={closeNotificationList} />}
    </>
  );
}

export default UserContent;
