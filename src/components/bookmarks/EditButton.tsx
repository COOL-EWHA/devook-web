import React, { lazy, Suspense } from 'react';
import styled from 'styled-components';

import { Button } from 'src/components/common';
import { useBookmarkMemoEdit, useBookmark } from 'src/lib/hooks';

const Modal = lazy(() => import('src/components/common/Modal'));
const Input = lazy(() => import('src/components/common/Input'));
const Textarea = lazy(() => import('src/components/common/Textarea'));

function BookmarkEditButton() {
  const { data } = useBookmark();
  const { isModalOpen, openModal, closeModal, onSubmit, onChange, memo } = useBookmarkMemoEdit({
    originalMemo: data?.memo,
  });

  return (
    <>
      <Button size="large" text="수정" onClick={openModal} />
      <Suspense fallback={<div>Loading...</div>}>
        {isModalOpen && (
          <Modal onClose={closeModal} onComplete={onSubmit} title="메모 수정하기">
            <InputWrapper>
              <Input name="url" value={data?.createdAt.toString()} label="생성 날짜" disabled />
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
