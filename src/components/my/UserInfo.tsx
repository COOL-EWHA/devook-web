import React from 'react';

import { LogoutButton, SidebarHeader, UserProfileCard, WithdrawButton } from '.';

interface IUserInfoProps {
  onNotificationButtonClick: () => void;
}

function UserInfo({ onNotificationButtonClick }: IUserInfoProps) {
  return (
    <>
      <SidebarHeader onNotificationButtonClick={onNotificationButtonClick} />
      <UserProfileCard />
      <LogoutButton />
      <WithdrawButton />
    </>
  );
}

export default UserInfo;
