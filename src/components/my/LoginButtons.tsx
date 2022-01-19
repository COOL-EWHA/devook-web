import React from 'react';
import styled from 'styled-components';

import { P } from 'src/components/common';
import LoginButton from './LoginButton';
import { useAuthTestLogin } from 'src/lib/hooks';

const TEST_EMAIL_1 = process.env.REACT_APP_TEST_EMAIL_1 as string;

export default function LoginButtons() {
  const { testLogin } = useAuthTestLogin();
  const { hostname } = window.location;

  if (hostname.includes('devook.com') && hostname !== 'www.devook.com') {
    // eslint-disable-next-line react/button-has-type
    return <button onClick={() => testLogin(TEST_EMAIL_1)}>효진 로그인</button>;
  }

  return (
    <>
      <Title fontSize="2rem" fontWeight={500}>
        로그인
      </Title>
      <LoginButton platform="google" />
      <LoginButton platform="github" />
    </>
  );
}

const Title = styled(P)`
  margin-bottom: 2.2rem;
`;
