import React from 'react';
import styled from 'styled-components';
import OutsideClickHandler from 'react-outside-click-handler';

import { LoginButton } from 'src/components/auth';
import { MaterialIcon } from 'src/components/common';

import { ReactComponent as GithubIcon } from 'src/assets/icons/github.svg';
import { ReactComponent as GoogleIcon } from 'src/assets/icons/google.svg';
import { GREY, WHITE } from 'src/styles/colors';
import { useNavigate } from 'react-router-dom';

function My() {
  const isLoggedIn = false;
  const navigate = useNavigate();

  return (
    <Overlay>
      <OutsideClickHandler
        onOutsideClick={() => {
          navigate(-1);
        }}
      >
        <Wrapper>
          <CloseButton>
            <MaterialIcon
              type="close"
              onClick={() => {
                navigate(-1);
              }}
            />
          </CloseButton>
          {isLoggedIn ? (
            <>
              <UserInfoBlock>
                <UserName>eunko님 안녕하세요!</UserName>
                <Email>koeun0712@ewhain.net</Email>
              </UserInfoBlock>
              <ButtonsWrapper>
                <Button>로그아웃</Button>
                <Button>회원탈퇴</Button>
              </ButtonsWrapper>
            </>
          ) : (
            <>
              <Title>로그인 및 회원가입</Title>
              <LoginButton platformType="github">
                <GithubIcon width="2rem" height="2rem" />
              </LoginButton>
              <LoginButton platformType="google">
                <GoogleIcon width="2rem" height="2rem" />
              </LoginButton>
            </>
          )}
        </Wrapper>
      </OutsideClickHandler>
    </Overlay>
  );
}

export default React.memo(My);

const Overlay = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

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

  @media screen and (min-width: 1025px) {
    width: 480px;
    min-height: 100vh;

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

const Title = styled.p`
  font-size: 1.8rem;
  font-weight: 500;
  color: ${GREY[800]};
  margin-bottom: 2.2rem;
`;

const Email = styled.p`
  font-size: 1.2rem;
  color: ${GREY[600]};
`;

const UserInfoBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 7rem;
`;

const UserName = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  color: ${GREY[800]};
`;

const CloseButton = styled.button`
  display: flex;
  justify-content: flex-end;
  width: 100%;

  border: none;
  background: none;
  margin-bottom: 1.4rem;
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
