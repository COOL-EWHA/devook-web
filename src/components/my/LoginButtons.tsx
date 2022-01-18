import React from 'react';
import styled from 'styled-components';

import LoginButton from './LoginButton';
import { GREY } from 'src/constant';

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
      <Title>로그인</Title>
      <LoginButton platform="google" />
      <LoginButton platform="github" />
    </>
  );
}

const Title = styled.p`
  font-size: 2rem;
  font-weight: 500;
  color: ${GREY[800]};
  margin-bottom: 2.2rem;
`;
