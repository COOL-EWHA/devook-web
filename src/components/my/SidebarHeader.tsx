import React from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';

import { IconButton } from 'src/components/common';

import { isUserLoggedIn } from 'src/lib/store';

export type IMySidebarProps = { onCloseButtonClick: () => void };

export default function MySidebarHeader({ onCloseButtonClick }: IMySidebarProps) {
  const isLoggedIn = useRecoilValue(isUserLoggedIn);

  return (
    <Wrapper>
      <IconButton iconType="close" onClick={onCloseButtonClick} />
      {isLoggedIn && <IconButton iconType="notifications" />}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 1.6rem;
`;
