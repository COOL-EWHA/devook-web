import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { IconButton, P } from 'src/components/common';
import { GREY, WHITE } from 'src/constant';

interface IBackHeaderProps {
  title: string;
  isForSidebar?: boolean;
  onClick?: () => void;
}

export default function BackHeader({ title, isForSidebar = false, onClick }: IBackHeaderProps) {
  const navigate = useNavigate();

  const handleBack = () => {
    if (onClick) {
      onClick();
      return;
    }
    navigate(-1);
  };

  return (
    <Wrapper isForSidebar={isForSidebar}>
      <IconButton iconType="arrow_back_ios" onClick={handleBack} />
      <Title>{title}</Title>
    </Wrapper>
  );
}

const Wrapper = styled.div<{ isForSidebar?: boolean }>`
  @media screen and (min-width: 1025px) {
    ${({ isForSidebar }) =>
      isForSidebar
        ? `
        position: fixed;
        top: 0;
        right:0;
        padding: 0 2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width:320px; 
        height: 5.2rem;
        border-bottom: 1px solid ${GREY[300]};
        `
        : `display: none;`}
  }
  @media screen and (max-width: 1024px) {
    position: fixed;
    top: 0;
    ${({ isForSidebar }) => isForSidebar && 'right:0'};
    z-index: 12;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: ${({ isForSidebar }) => (isForSidebar ? '320px' : '100%')};
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
