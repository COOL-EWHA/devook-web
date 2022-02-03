import React from 'react';
import styled from 'styled-components';

import { MaterialIcon, Modal, Input, Textarea } from 'src/components/common';

import { useBookmarkCreate } from 'src/lib/hooks/bookmarks';

export default function BookmarkCreateButton() {
  const { form, onChange, onSubmit, openModal, closeModal, isModalOpen } = useBookmarkCreate();
  const { url, memo } = form;

  return (
    <>
      <BookmarkAddIcon onClick={openModal} />
      {isModalOpen && (
        <Modal onClose={closeModal} onComplete={onSubmit} title="북마크 추가하기">
          <InputWrapper>
            <Input name="url" value={url} onChange={onChange} label="링크" placeholder="북마크할 링크를 입력해주세요" />
            <Textarea
              name="memo"
              value={memo}
              onChange={onChange}
              label="메모"
              placeholder="이 북마크와 관련된 메모를 입력해보세요"
            />
          </InputWrapper>
        </Modal>
      )}
    </>
  );
}

const BookmarkAddIcon = styled(MaterialIcon).attrs({ type: 'add', width: '2.8rem' })``;

const InputWrapper = styled.div`
  padding: 2rem;
`;
