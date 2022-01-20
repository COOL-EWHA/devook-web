import React from 'react';
import styled from 'styled-components';

import { LabeledText, Section, Button, Modal, Input, Textarea } from 'src/components/common';
import { useBookmark, useBookmarkMemoEdit } from 'src/lib/hooks';

function BookmarkInfo() {
  const { data, isLoading } = useBookmark();
  const { isModalOpen, openModal, onSubmit, onChange, memo, setIsModalOpen } = useBookmarkMemoEdit({
    originalMemo: data?.memo,
  });

  return (
    <>
      {isLoading && <div>loading...</div>}
      {data && (
        <Section
          title="북마크 정보"
          rightComponent={<Button buttonType="text" text="수정" color="GREY" onClick={openModal} />}
          type="secondary"
        >
          <LabeledText label="생성 날짜" value={data.createdAt.toString()} />
          <LabeledText label="메모" value={data.memo} />
        </Section>
      )}
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

export default BookmarkInfo;

const InputWrapper = styled.div`
  padding: 2rem;
`;
