import React from 'react';
import styled from 'styled-components';

import { GREY } from 'src/styles/colors';
import { useUserLogout } from 'src/lib/hooks/users';

function LogoutButton() {
  const { logout } = useUserLogout();

  // Logout 함수에 alert params 있어서 핸들러 따로 선언
  const handleLogoutButtonClick = () => {
    logout();
  };

  return <Button onClick={handleLogoutButtonClick}>로그아웃</Button>;
}

export default LogoutButton;

// @TO_BE_IMPROVED: 후에 공용 버튼으로 대체
const Button = styled.button`
  height: 4rem;

  font-size: 1.2rem;
  color: ${GREY[700]};
  font-weight: 500;
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;
`;
