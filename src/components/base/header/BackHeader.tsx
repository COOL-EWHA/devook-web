import React, { lazy, Suspense } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { IconButton, P } from 'src/components/common';
import { GREY, WHITE } from 'src/constant';

const Button = lazy(() => import('src/components/common/Button'));
const SidebarToggleButton = lazy(() => import('src/components/my/SidebarToggleButton'));

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
      <Suspense fallback={<div>Loading...</div>}>
        {isModalHeader && <Button text="설정" onClick={onComplete} />}
        {!isModalHeader && <SidebarToggleButton />}
      </Suspense>
    </Wrapper>
  );
}

const Wrapper = styled.div<{ isModalHeader?: boolean }>`\
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${WHITE};
  ${({ isModalHeader }) =>
    isModalHeader
      ? `
      padding: 1.6rem 2rem;
    `
      : `
      @media screen and (min-width: 1025px) {
        display: none;
      }
      position: fixed;
      top: 0;
      z-index: 12;
      width: 100%;
      padding: 0 2rem;
      height: 5.2rem;
      border-bottom: 1px solid ${GREY[300]};
  `};
`;

const Title = styled(P)<{ isModalHeader?: boolean }>`
  margin: 0 auto;
  padding-right: ${({ isModalHeader }) => (isModalHeader ? 0 : '2.4rem')};
`;
