import React from 'react';
import styled from 'styled-components';

import { Button, P, IconButton } from 'src/components/common';

interface ICloseHeaderProps {
  onClose: () => void;
  onComplete?: () => void;
  title: string;
}

export default function CloseHeader({ onClose, onComplete, title }: ICloseHeaderProps) {
  return (
    <Wrapper>
      <IconButton iconType="close" onClick={onClose} />
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
