import React from 'react';
import styled, { css } from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';

import { Button, MaterialIcon, P } from 'src/components/common';

import { GREY, WHITE, SUB_ROUTES } from 'src/constant';

interface IBackHeaderProps {
  onBack?: () => void;
  onComplete?: () => void;
  title?: string;
}

export default function BackHeader({ onBack, onComplete, title }: IBackHeaderProps) {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      navigate(-1);
    }
  };

  return (
    <Wrapper isForModal={title}>
      <MaterialIcon type="arrow_back_ios" onClick={handleBack} />
      <P fontSize={title ? '1.6rem' : '2rem'}>
        {SUB_ROUTES.find((subRoute) => subRoute.pathname === pathname)?.title ?? title}
      </P>
      {/* // @TO_BE_IMPROVED: 마이페이지 백헤더에 있는 알림 아이콘은 로그인시에만 보이게끔 수정해야함 */}
      {pathname === '/my' && <MaterialIcon type="notifications" />}
      {onComplete && <Button text="설정" onClick={onComplete} />}
    </Wrapper>
  );
}

const getWrapperStyle = (isForModal?: string) => {
  if (isForModal) {
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
      height: 6rem;
      display: none;
    }

    @media screen and (max-width: 1024px) {
      height: 5.2rem;
      border-bottom: 1px solid ${GREY[300]};
    }
  `;
};

const Wrapper = styled.div<{ isForModal?: string }>`
  ${({ isForModal }) => getWrapperStyle(isForModal)};
`;
