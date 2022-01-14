import React from 'react';
import styled from 'styled-components';

import { GREY, WHITE, OAUTH_DATA } from 'src/constant';

interface ILoginButtonProps {
  platform: 'google' | 'github';
}

export default function LoginButton({ platform }: ILoginButtonProps) {
  const { Icon, link } = OAUTH_DATA[platform];

  return (
    <A href={link}>
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
