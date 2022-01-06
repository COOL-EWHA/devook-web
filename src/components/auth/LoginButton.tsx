import React from 'react';
import styled from 'styled-components';

import { GREY, WHITE } from 'src/styles/colors';

interface ILoginButtonProps {
  platformType: string;
  children: React.ReactNode;
}

export default function LoginButton({ platformType, children: platformLogoIcon }: ILoginButtonProps) {
  return (
    <Wrapper>
      {platformLogoIcon}
      <P>{platformType} 계정으로 로그인</P>
    </Wrapper>
  );
}

const Wrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  padding: 1.2rem;
  margin: 1rem 0;

  background: ${WHITE};
  border: 1px solid ${GREY[400]};
  border-radius: 2.4rem;
  cursor: pointer;
`;

const P = styled.p`
  margin-left: 0.8rem;
  font-size: 1.2rem;
  color: ${GREY[700]};
`;
