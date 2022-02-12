import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { IconButton } from 'src/components/common';
import { isUserLoggedIn, isMySidebarOpen } from 'src/lib/store';

interface IMySidebarHeaderProps {
  onNotificationButtonClick?: () => void;
}

function MySidebarHeader({ onNotificationButtonClick }: IMySidebarHeaderProps) {
  const isLoggedIn = useRecoilValue(isUserLoggedIn);
  const setIsOpen = useSetRecoilState(isMySidebarOpen);

  const handleCloseButtonClick = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <Wrapper>
      <IconButton iconType="close" onClick={handleCloseButtonClick} />
      {isLoggedIn && <IconButton iconType="notifications" onClick={onNotificationButtonClick} />}
    </Wrapper>
  );
}

export default React.memo(MySidebarHeader);

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 1.6rem;
`;
