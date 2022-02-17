import React from 'react';
import styled from 'styled-components';

import { P } from 'src/components/common';
import LoginButton from './LoginButton';

import { useAuthTestLogin } from 'src/lib/hooks';

export default function LoginButtons() {
  const { testLogin } = useAuthTestLogin();
  const { hostname } = window.location;

  if (hostname.includes('devook.com') && hostname !== 'www.devook.com') {
    // eslint-disable-next-line react/button-has-type
    return <button onClick={testLogin}>효진 로그인</button>;
  }

  return (
    <>
      <Title>로그인</Title>
      <LoginButton platform="google" />
      <LoginButton platform="github" />
    </>
  );
}

const Title = styled(P).attrs({
  fontSize: '2rem',
  fontWeight: 500,
})`
  margin-bottom: 2.2rem;
`;
