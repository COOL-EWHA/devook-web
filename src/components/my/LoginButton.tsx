import React from 'react';
import styled from 'styled-components';

import { P } from 'src/components/common';
import { GREY, WHITE, OAUTH_DATA } from 'src/constant';

interface ILoginButtonProps {
  platform: 'google' | 'apple';
}

export default function LoginButton({ platform }: ILoginButtonProps) {
  const { Icon, link } = OAUTH_DATA[platform];

  return (
    <A href={link}>
      <Icon />
      <Text>{platform.toUpperCase()} 계정으로 시작하기</Text>
    </A>
  );
}

const A = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  padding: 1rem;
  margin-bottom: 1.2rem;

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

const Text = styled(P).attrs({
  color: GREY[700],
})`
  margin: 0 0 0.1rem 0.8rem;
`;
