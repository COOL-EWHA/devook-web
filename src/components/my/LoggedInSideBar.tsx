import React, { useCallback, useState } from 'react';

import { LogoutButton, NotificationList, SidebarHeader, UserProfileCard, WithdrawButton } from '.';

function LoggedInSideBar() {
  const [isNotificationShown, setIsNotificationShown] = useState(false);

  const handleBackButtonClick = useCallback(() => {
    setIsNotificationShown(false);
  }, []);

  const handleNotificationButtonClick = useCallback(() => {
    setIsNotificationShown(true);
  }, []);

  return (
    <>
      {isNotificationShown && <NotificationList onBackButtonClick={handleBackButtonClick} />}
      {!isNotificationShown && (
        <>
          <SidebarHeader onNotificationButtonClick={handleNotificationButtonClick} />
          <UserProfileCard />
          <LogoutButton />
          <WithdrawButton />
        </>
      )}
    </>
  );
}

export default LoggedInSideBar;
