import React from 'react';
import styled from 'styled-components';

import { Button } from 'src/components/common';

import { useUserWithdraw } from 'src/lib/hooks';

function WithdrawButton() {
  const { withdraw } = useUserWithdraw();

  return <StyledButton onClick={withdraw} />;
}

export default WithdrawButton;

const StyledButton = styled(Button).attrs({ size: 'small', text: '회원탈퇴' })`
  margin-bottom: 0.8rem;
`;
