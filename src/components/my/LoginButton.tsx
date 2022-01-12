import React from 'react';
import styled from 'styled-components';

import { GREY, WHITE } from 'src/styles/colors';
import { OAUTH_DATA } from 'src/constant';
import { getQueryString } from 'src/lib/utils';

interface ILoginButtonProps {
  platform: 'google';
}

export default function LoginButton({ platform }: ILoginButtonProps) {
  const { Icon, params } = OAUTH_DATA[platform];
  const oauthLink = `https://accounts.google.com/o/oauth2/v2/auth${getQueryString(params)}`;

  return (
    <A href={oauthLink}>
      <Icon />
      <P>{platform.toUpperCase()} 계정으로 시작하기</P>
    </A>
  );
}

const A = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  padding: 1rem;
  margin: 1.2rem 0;

  background: ${WHITE};
  border: 1px solid ${GREY[400]};
  border-radius: 2.4rem;
  cursor: pointer;
  transition: all 0.3s;
  text-decoration: none;

  :hover {
    background: ${GREY[200]};
  }
`;

const P = styled.p`
  margin-left: 0.8rem;
  font-size: 1.4rem;
  color: ${GREY[700]};
`;
