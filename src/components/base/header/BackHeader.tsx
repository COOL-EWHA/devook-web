import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { SidebarToggleButton } from 'src/components/my';
import { IconButton, P } from 'src/components/common';
import { GREY, WHITE } from 'src/constant';

interface IBackHeaderProps {
  title: string;
}

export default function BackHeader({ title }: IBackHeaderProps) {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <Wrapper>
      <IconButton iconType="arrow_back_ios" onClick={handleBack} />
      <Title>{title}</Title>
      <SidebarToggleButton />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  @media screen and (min-width: 1025px) {
    display: none;
  }
  @media screen and (max-width: 1024px) {
    position: fixed;
    top: 0;
    z-index: 12;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 5.2rem;
    padding: 0 2rem;
    border-bottom: 1px solid ${GREY[300]};
    background-color: ${WHITE};
  }
`;

const Title = styled(P).attrs({ fontSize: '2rem', fontWeight: 500 })`
  margin: 0 auto;
  padding-right: 2.4rem;
`;
