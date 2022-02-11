import React, { lazy, Suspense } from 'react';
import styled from 'styled-components';

import { Button } from 'src/components/common';

import { useBookmarkMemoEdit } from 'src/lib/hooks';

const Modal = lazy(() => import('src/components/common/Modal'));
const Input = lazy(() => import('src/components/common/Input'));
const Textarea = lazy(() => import('src/components/common/Textarea'));

interface IBookmarkEditButtonProps {
  id: number;
  createdAt: string;
  memo?: string;
}

function BookmarkEditButton({ id, createdAt, memo: prevMemo }: IBookmarkEditButtonProps) {
  const { isModalOpen, memo, openModal, closeModal, onSubmit, onChange } = useBookmarkMemoEdit({
    id,
    memo: prevMemo,
  });

  return (
    <>
      <Button size="large" text="수정" onClick={openModal} />
      <Suspense fallback={null}>
        {isModalOpen && (
          <Modal onClose={closeModal} onComplete={onSubmit} title="메모 수정하기">
            <InputWrapper>
              <Input name="url" value={createdAt} label="생성 시간" disabled />
              <Textarea
                name="memo"
                value={memo}
                onChange={onChange}
                label="메모"
                placeholder="이 북마크와 관련된 메모를 수정해보세요"
              />
            </InputWrapper>
          </Modal>
        )}
      </Suspense>
    </>
  );
}

export default BookmarkEditButton;

const InputWrapper = styled.div`
  padding: 2rem;
`;
