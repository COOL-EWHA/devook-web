import React from 'react';
import styled from 'styled-components';

import { Button } from 'src/components/common';

import { useAuthLogout } from 'src/lib/hooks';

function LogoutButton() {
  const { logout } = useAuthLogout();

  // Logout 함수에 alert params 있어서 핸들러 따로 선언
  const handleClick = () => {
    logout();
  };

  return <StyledButton onClick={handleClick} />;
}

export default LogoutButton;

const StyledButton = styled(Button).attrs({ size: 'small', text: '로그아웃' })`
  margin-bottom: 0.8rem;
`;
