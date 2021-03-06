import React, { lazy, Suspense } from 'react';
import styled from 'styled-components';

import { IconButton } from 'src/components/common';
import { useBookmarkCreate } from 'src/lib/hooks/bookmarks';

const Modal = lazy(() => import('src/components/common/Modal'));
const Input = lazy(() => import('src/components/common/Input'));
const Textarea = lazy(() => import('src/components/common/Textarea'));

export default function BookmarkCreateButton() {
  const { form, onChange, onSubmit, openModal, closeModal, isModalOpen, isSubmitDisabled } = useBookmarkCreate();
  const { url, memo } = form;

  return (
    <>
      <IconButton iconType="add" iconWidth="2.8rem" onClick={openModal} />
      <Suspense fallback={null}>
        {isModalOpen && (
          <StyledModal
            onClose={closeModal}
            onComplete={onSubmit}
            title="북마크 추가하기"
            isCompleteButtonDisabled={isSubmitDisabled}
          >
            <form>
              <Input
                name="url"
                value={url}
                onChange={onChange}
                label="링크"
                placeholder="북마크할 링크를 입력해주세요"
              />
              <Textarea
                name="memo"
                value={memo}
                onChange={onChange}
                label="메모"
                placeholder="이 북마크와 관련된 메모를 입력해보세요"
              />
            </form>
          </StyledModal>
        )}
      </Suspense>
    </>
  );
}

// eslint-disable-next-line react/jsx-props-no-spreading
const StyledModal = styled((props) => <Modal {...props} />)`
  padding: 2rem;
`;
