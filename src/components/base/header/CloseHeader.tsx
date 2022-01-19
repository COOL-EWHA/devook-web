import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { Button, MaterialIcon, P } from 'src/components/common';

interface ICloseHeaderProps {
  onClose?: React.Dispatch<React.SetStateAction<boolean>>;
  onComplete?: () => void;
  title: string;
}

export default function CloseHeader({ onClose: setIsModalOpened, onComplete, title }: ICloseHeaderProps) {
  const navigate = useNavigate();

  const handleClose = () => {
    if (setIsModalOpened) {
      setIsModalOpened(false);
    } else {
      navigate(-1);
    }
  };

  return (
    <Wrapper>
      <MaterialIcon type="close" onClick={handleClose} />
      <P fontSize="1.6rem">{title}</P>
      {onComplete && <Button text="완료" onClick={onComplete} />}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.6rem 2rem;
`;
