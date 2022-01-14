import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { UserProfileCard, LoginButtons, LogoutButton, WithdrawButton } from 'src/components/my';
import { MaterialIcon } from 'src/components/common';

import { GREY, WHITE } from 'src/styles/colors';
import { accessToken } from 'src/lib/store/auth';

export default function MyPage() {
  const isLoggedIn = !!useRecoilValue(accessToken);
  const navigate = useNavigate();

  const handleClose = () => {
    navigate(-1);
  };

  const handleWrapperClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
  };

  return (
    <Overlay onClick={handleClose}>
      <Wrapper onClick={handleWrapperClick}>
        <CloseButton>
          <MaterialIcon type="close" onClick={handleClose} />
        </CloseButton>
        {isLoggedIn && (
          <>
            <UserProfileCard />
            <ButtonsWrapper>
              <LogoutButton />
              <WithdrawButton />
            </ButtonsWrapper>
          </>
        )}
        {!isLoggedIn && <LoginButtons />}
      </Wrapper>
    </Overlay>
  );
}

const Overlay = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 11;

  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(4px);

  @media screen and (max-width: 1024px) {
    display: block;
    top: 4.4rem;
    background-color: white;
  }
`;

const Wrapper = styled.div`
  background: ${WHITE};
  padding: 2rem;
  min-height: 100vh;

  @media screen and (min-width: 1025px) {
    width: 480px;
    animation: 0.4s ease-in-out openMyPage;
  }

  @keyframes openMyPage {
    0% {
      opacity: 0;
      transform: translateX(300px);
    }
    100% {
      opacity: 1;
      transform: translateX(0px);
    }
  }
`;

const CloseButton = styled.button`
  display: block;
  width: fit-content;
  margin: 0 0 1.6rem auto;
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

// @TO_BE_IMPROVED: 후에 공용 버튼으로 대체
const Button = styled.button`
  height: 4rem;

  font-size: 1.2rem;
  color: ${GREY[700]};
  font-weight: 500;
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
