import React from 'react';
import styled from 'styled-components';

import { GREY, WHITE } from 'src/styles/colors';

interface ILoginButtonProps {
  platform: 'github' | 'google';
  children: React.ReactNode;
}

export default function MyLoginButton({ platform, children: platformLogoIcon }: ILoginButtonProps) {
  return (
    <Wrapper>
      {platformLogoIcon}
      <P>{platform.toUpperCase()} 계정으로 시작하기</P>
    </Wrapper>
  );
}

const Wrapper = styled.button`
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
  :hover {
    background: ${GREY[200]};
  }
`;

const P = styled.p`
  margin-left: 0.8rem;
  font-size: 1.4rem;
  color: ${GREY[700]};
`;
