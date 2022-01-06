import React from 'react';
import styled from 'styled-components';

// eslint-disable-next-line import/order
import LoginButton from './LoginButton';
import { GREY } from 'src/styles/colors';
import GithubIcon from 'src/components/assets/icons/github';
import GoogleIcon from 'src/components/assets/icons/google';

export default function LoginButtons() {
  return (
    <>
      <Title>로그인</Title>
      <LoginButton platform="github">
        <GithubIcon />
      </LoginButton>
      <LoginButton platform="google">
        <GoogleIcon />
      </LoginButton>
    </>
  );
}

const Title = styled.p`
  font-size: 2rem;
  font-weight: 500;
  color: ${GREY[800]};
  margin-bottom: 2.2rem;
`;
