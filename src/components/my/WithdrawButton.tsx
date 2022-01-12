import React from 'react';
import styled from 'styled-components';

import { GREY } from 'src/styles/colors';
import { useUserWithdraw } from 'src/lib/hooks/users';

function WithdrawButton() {
  const { withdraw } = useUserWithdraw();

  return <Button onClick={withdraw}>회원탈퇴</Button>;
}

export default WithdrawButton;

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