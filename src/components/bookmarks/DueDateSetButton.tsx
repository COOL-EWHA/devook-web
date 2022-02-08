import React from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/locale';

import 'react-datepicker/dist/react-datepicker.css';
import 'src/styles/datepicker.css';

import { Button, ResetButton } from 'src/components/common';
import Modal from 'src/components/common/Modal';
import { ButtonSize } from 'src/components/common/Button';
import { CACTUS_GREEN } from 'src/constant';

import { useBookmarkDueDateSet } from 'src/lib/hooks';

interface IBookmarkDueDateSetButtonProps {
  className?: string;
  id: number;
  size?: ButtonSize;
  dueDate?: string;
}

export default function BookmarkDueDateSetButton({
  className,
  id,
  dueDate: _dueDate,
  size = 'medium',
}: IBookmarkDueDateSetButtonProps) {
  const { dueDate, isModalOpen, openModal, closeModal, onSubmit, onChange } = useBookmarkDueDateSet(id, _dueDate);

  return (
    <>
      <StyledButton
        size={size}
        className={className}
        iconType="event_available"
        text={_dueDate || '기한설정'}
        onClick={openModal}
      />
      {isModalOpen && (
        <StyledModal onClose={closeModal} onComplete={onSubmit} title="읽기기한 설정하기">
          <DatePicker locale={ko} selected={dueDate} onChange={onChange} inline />
          <StyledResetButton onClick={() => onChange(null)} />
        </StyledModal>
      )}
    </>
  );
}

const StyledButton = styled(Button)<{ text: string }>`
  ${({ text }) =>
    text !== '기한설정' &&
    `
      color: ${CACTUS_GREEN[700]};
      .material-icons {
        color: ${CACTUS_GREEN[700]};
      }
    `}
`;

// eslint-disable-next-line react/jsx-props-no-spreading
const StyledModal = styled((props) => <Modal {...props} />)`
  padding: 1.2rem 2rem 2rem;
`;

const StyledResetButton = styled(ResetButton)`
  margin-top: 0.4rem;
`;
