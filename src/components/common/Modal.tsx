import React from 'react';
import styled from 'styled-components';

import { CloseHeader } from 'src/components/base/header';

import { GREY, WHITE } from 'src/constant';

interface IModalProps {
  title: string;
  onClose: () => void;
  onComplete?: () => void;
  children?: React.ReactNode;
  className?: string;
}

function Modal({ title, onClose, onComplete, children, className }: IModalProps) {
  const handleWrapperClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
  };

  return (
    <Overlay onClick={onClose}>
      <Wrapper onClick={handleWrapperClick}>
        <CloseHeader title={title} onClose={onClose} onComplete={onComplete} />
        <Divider />
        <ContentWrapper className={className}>{children}</ContentWrapper>
      </Wrapper>
    </Overlay>
  );
}

export default React.memo(Modal);

const Overlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 20;

  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(4px);

  @media screen and (max-width: 641px) {
    align-items: flex-end;
  }
`;

const Wrapper = styled.div`
  width: 38rem;
  border-radius: 1.4rem;
  background: ${WHITE};
  animation: 0.4s ease-in-out openModal;

  @media screen and (max-width: 641px) {
    width: 100%;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
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

const Divider = styled.div`
  width: 100%;
  height: 0.1rem;
  background-color: ${GREY[400]};
`;

const ContentWrapper = styled.div<{ className?: string }>``;
