import React from 'react';
import styled from 'styled-components';

import { Button, Modal, Input, Textarea } from 'src/components/common';

import { useBookmarkMemoEdit, useBookmark } from 'src/lib/hooks';

function BookmarkEditButton() {
  const { data } = useBookmark();
  const { isModalOpen, openModal, onSubmit, onChange, memo, setIsModalOpen } = useBookmarkMemoEdit({
    originalMemo: data?.memo,
  });

  return (
    <>
      <Button size="large" text="수정" onClick={openModal} />
      {isModalOpen && (
        <Modal setIsModalOpen={setIsModalOpen} onComplete={onSubmit} title="메모 수정하기">
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
    </>
  );
}

export default BookmarkEditButton;

const InputWrapper = styled.div`
  padding: 2rem;
`;
