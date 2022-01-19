import React from 'react';
import styled from 'styled-components';

import { MaterialIcon, Modal, Input, Textarea } from 'src/components/common';
import { GREY } from 'src/constant';

import { useBookmarkCreate } from 'src/lib/hooks/bookmarks';

export default function BookmarkAddButton() {
  const { form, onChange, onSubmit, openModal, isModalOpen, setIsModalOpen } = useBookmarkCreate();
  const { url, memo } = form;

  return (
    <>
      <Button onClick={openModal}>
        <P>북마크 추가</P>
        <BookmarkAddIcon type="add" />
      </Button>
      {isModalOpen && (
        <Modal setIsModalOpen={setIsModalOpen} onComplete={onSubmit} title="북마크 추가하기">
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

const Button = styled.button`
  @media screen and (min-width: 1025px) {
    width: 8rem;
    height: 2.4rem;
    border-radius: 0.8rem;
    border: 1px solid ${GREY[500]};
    background: none;
    font-size: 1.2rem;
    color: ${GREY[500]};
    margin: 0 0.6rem;
    cursor: pointer;
  }

  @media screen and (max-width: 1024px) {
    background: none;
    border: none;
    padding: 0;
  }
`;

const P = styled.p`
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

const BookmarkAddIcon = styled(MaterialIcon)`
  @media screen and (min-width: 1025px) {
    && {
      display: none;
    }
  }
`;

const InputWrapper = styled.div`
  padding: 2rem;
`;
