import React from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';

import { MaterialIcon } from 'src/components/common';

import { accessToken } from 'src/lib/store';

export type IMySidebarProps = { onCloseButtonClick: () => void };

export default function MySidebarHeader({ onCloseButtonClick }: IMySidebarProps) {
  const isLoggedIn = !!useRecoilValue(accessToken);

  return (
    <Wrapper>
      <CloseButton>
        <MaterialIcon type="close" onClick={onCloseButtonClick} />
      </CloseButton>
      {isLoggedIn && <NotificationIcon />}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 1.6rem;
`;

const NotificationIcon = styled(MaterialIcon).attrs({ type: 'notifications' })`
  margin-left: auto;
`;

const CloseButton = styled.button`
  display: block;
  width: fit-content;
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
`;
