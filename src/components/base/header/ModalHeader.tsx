import React from 'react';
import styled from 'styled-components';

import { Button, MaterialIcon } from 'src/components/common';

interface IModalHeaderProps {
  title: string;
  hasStep: boolean;
  setIsModalOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ModalHeader({ title, hasStep, setIsModalOpened }: IModalHeaderProps) {
  const handleClose = () => {
    setIsModalOpened(false);
  };

  const handleGoBack = () => {
    //
  };

  return (
    <Wrapper>
      {hasStep && <MaterialIcon type="arrow_back_ios" onClick={handleGoBack} />}
      {!hasStep && <MaterialIcon type="close" onClick={handleClose} />}
      <P>{title}</P>
      <Button text={hasStep ? '설정' : '완료'} type="text" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
`;

const P = styled.p`
  font-size: 1.6rem;
`;
