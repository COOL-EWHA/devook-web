import React from 'react';
import styled, { css } from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { SidebarToggleButton } from 'src/components/my';
import { IconButton, Button, P } from 'src/components/common';

import { GREY, WHITE } from 'src/constant';

interface IBackHeaderProps {
  onBack?: () => void;
  onComplete?: () => void;
  title: string;
}

export default function BackHeader({ onBack, onComplete, title }: IBackHeaderProps) {
  const navigate = useNavigate();
  const isModalHeader = !!onComplete;

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      navigate(-1);
    }
  };

  return (
    <Wrapper isModalHeader={isModalHeader}>
      <IconButton iconType="arrow_back_ios" onClick={handleBack} />
      <Title
        fontSize={isModalHeader ? '1.6rem' : '2rem'}
        fontWeight={isModalHeader ? 400 : 500}
        isModalHeader={isModalHeader}
      >
        {title}
      </Title>
      {isModalHeader && <Button text="설정" onClick={onComplete} />}
      {!isModalHeader && <SidebarToggleButton />}
    </Wrapper>
  );
}

const getWrapperStyle = (isModalHeader?: boolean) => {
  if (isModalHeader) {
    return css`
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1.6rem 2rem;
    `;
  }
  return css`
    position: fixed;
    top: 0;
    z-index: 12;

    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    padding: 0 2rem;
    background-color: ${WHITE};

    @media screen and (min-width: 1025px) {
      display: none;
    }

    @media screen and (max-width: 1024px) {
      height: 5.2rem;
      border-bottom: 1px solid ${GREY[300]};
    }
  `;
};

const Wrapper = styled.div<{ isModalHeader?: boolean }>`
  ${({ isModalHeader }) => getWrapperStyle(isModalHeader)};
`;

const Title = styled(P)<{ isModalHeader?: boolean }>`
  margin: 0 auto;
  padding-right: ${({ isModalHeader }) => (isModalHeader ? 0 : '2.4rem')};
`;
