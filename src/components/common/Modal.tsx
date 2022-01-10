import React from 'react';
import styled from 'styled-components';

import { Input } from 'src/components/common';
import { ModalHeader } from 'src/components/base/header';

import { GREY, WHITE } from 'src/styles/colors';

interface IModalProps {
  title: string;
  hasStep?: boolean;
  setIsModalOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Modal({ title, hasStep = false, setIsModalOpened }: IModalProps) {
  return (
    <Overlay onClick={() => setIsModalOpened(false)}>
      <Wrapper
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <ModalHeader title={title} hasStep={hasStep} setIsModalOpened={setIsModalOpened} />
        <Divider />
        <InputWrapper>
          <Input label="링크 추가" placeholder="북마크할 링크를 추가해주세요" />
          <Input label="메모 추가" type="TEXTAREA" placeholder="이 북마크와 관련된 메모를 추가해보세요" />
        </InputWrapper>
      </Wrapper>
    </Overlay>
  );
}

const Overlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(4px);

  @media screen and (max-width: 641px) {
    align-items: flex-end;
  }
`;

const Wrapper = styled.div`
  min-width: 38rem;
  border-radius: 1.4rem;
  background: ${WHITE};
  animation: 0.4s ease-in-out openModal;

  @media screen and (max-width: 641px) {
    width: 100%;
  }

  @keyframes openModal {
    0% {
      opacity: 0;
      transform: translateY(400px) scale(0.75);
    }
    75% {
      opacity: 1;
      transform: translateY(-16px) scale(1);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
`;

const InputWrapper = styled.div`
  padding: 2rem;
`;

const Divider = styled.div`
  width: 100%;
  height: 0.1rem;
  background-color: ${GREY[400]};
`;
