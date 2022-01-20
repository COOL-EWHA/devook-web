import React from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';

import { UserProfileCard, LoginButtons, LogoutButton, WithdrawButton, SidebarHeader } from 'src/components/my';
import { WHITE } from 'src/constant';

import { accessToken } from 'src/lib/store';

export type IMySidebarProps = { onClose: () => void };

export default function MySidebar({ onClose }: IMySidebarProps) {
  const isLoggedIn = !!useRecoilValue(accessToken);

  const handleWrapperClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
  };

  return (
    <Overlay onClick={onClose}>
      <Wrapper onClick={handleWrapperClick}>
        <SidebarHeader onCloseButtonClick={onClose} />
        {isLoggedIn && (
          <>
            <UserProfileCard />
            <LogoutButton />
            <WithdrawButton />
          </>
        )}
        {!isLoggedIn && <LoginButtons />}
      </Wrapper>
    </Overlay>
  );
}

const Overlay = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 11;

  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(4px);
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: ${WHITE};
  padding: 2rem;
  min-height: 100vh;
  width: 320px;
  @media (min-width: 641px) {
    html {
      width: 480px;
    }
  }
  animation: 0.4s ease-in-out open;

  @keyframes open {
    0% {
      opacity: 0;
      transform: translateX(300px);
    }
    100% {
      opacity: 1;
      transform: translateX(0px);
    }
  }
`;
