import React from 'react';
import styled from 'styled-components';

import { P } from 'src/components/common';
import LoginButton from './LoginButton';

export default function LoginButtons() {
  return (
    <>
      <Title>로그인</Title>
      <LoginButton platform="google" />
      <LoginButton platform="apple" />
    </>
  );
}

const Title = styled(P).attrs({
  fontSize: '2rem',
  fontWeight: 500,
})`
  margin-bottom: 2.2rem;
`;
