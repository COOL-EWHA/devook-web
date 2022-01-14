import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { Button, MaterialIcon } from 'src/components/common';

import { GREY } from 'src/constant';

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
      <P>{title}</P>
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

const P = styled.p`
  font-size: 1.6rem;
  color: ${GREY[700]};
`;
