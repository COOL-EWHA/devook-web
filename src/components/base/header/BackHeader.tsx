import React from 'react';
import styled from 'styled-components';

import { MaterialIcon } from 'src/components/common';

import { GREY, WHITE } from 'src/styles/colors';

interface IBackHeaderProps {
  title?: string;
}

export default function BackHeader({ title }: IBackHeaderProps) {
  return (
    <Wrapper>
      <TitleWrapper>
        <MaterialIcon type="arrow_back_ios" width="2.4rem" />
        <P>{title}</P>
      </TitleWrapper>
      <MaterialIcon type="person" width="2.4rem" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: fixed;
  top: 0;

  display: flex;
  justify-content: space-between;

  width: 100%;
  padding: 0 2rem;
  background-color: ${WHITE};

  @media screen and (min-width: 1025px) {
    display: none;
  }

  @media screen and (max-width: 1024px) {
    height: 4.4rem;
    border-bottom: 1px solid ${GREY[300]};
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
`;

const P = styled.p`
  font-size: 2rem;
  margin-left: 1.6rem;
  color: ${GREY[700]};
`;
