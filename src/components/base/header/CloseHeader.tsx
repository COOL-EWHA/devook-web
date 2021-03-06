import React from 'react';
import styled from 'styled-components';

import { Button, P, IconButton } from 'src/components/common';

interface ICloseHeaderProps {
  onClose: () => void;
  onComplete?: () => void;
  isCompleteButtonDisabled?: boolean;
  title: string;
}

function CloseHeader({ onClose, onComplete, isCompleteButtonDisabled = false, title }: ICloseHeaderProps) {
  return (
    <Wrapper>
      <IconButton iconType="close" onClick={onClose} />
      <P fontSize="1.6rem">{title}</P>
      {onComplete && <Button text="완료" onClick={onComplete} disabled={isCompleteButtonDisabled} />}
    </Wrapper>
  );
}

export default React.memo(CloseHeader);

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.6rem 2rem;
`;
