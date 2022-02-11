import React from 'react';
import styled from 'styled-components';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { IconButton } from 'src/components/common';
import { isUserLoggedIn, isMySidebarOpen } from 'src/lib/store';

interface IMySidebarHeaderProps {
  onNotificationButtonClick?: () => void;
}

export default function MySidebarHeader({ onNotificationButtonClick }: IMySidebarHeaderProps) {
  const isLoggedIn = useRecoilValue(isUserLoggedIn);
  const setIsOpen = useSetRecoilState(isMySidebarOpen);

  const handleCloseButtonClick = () => {
    setIsOpen(false);
  };

  return (
    <Wrapper>
      <IconButton iconType="close" onClick={handleCloseButtonClick} />
      {isLoggedIn && <IconButton iconType="notifications" onClick={onNotificationButtonClick} />}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 1.6rem;
`;
