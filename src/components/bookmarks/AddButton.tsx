import React, { useState } from 'react';
import styled from 'styled-components';
import { AxiosError, AxiosResponse } from 'axios';

import { MaterialIcon, Modal, Input, Textarea } from 'src/components/common';
import { GREY } from 'src/styles/colors';

import { useAuthHeaderConfig } from 'src/lib/hooks/auth';
import { createBookmark } from 'src/lib/api/bookmark';

export default function BookmarkAddButton() {
  const authHeaderConfig = useAuthHeaderConfig();

  const [form, setForm] = useState({ url: '', memo: '' });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmitError = (response?: AxiosResponse) => {
    if (response?.status === 401) {
      alert('로그인을 먼저 해주세요!');
      return;
    }
    alert('북마크 추가과정에서 오류가 발생하였습니다!');
  };

  const isFormValid = () => {
    if (!form.url) {
      alert('링크를 입력해주세요!');
      return false;
    }
    return true;
  };

  const handleBookmarkSubmit = async () => {
    if (!isFormValid) {
      return;
    }
    try {
      await createBookmark({ url: form.url, memo: form.memo, authHeaderConfig });
      alert('북마크에 추가되었습니다!');
      setIsModalOpen(false);
    } catch (error) {
      const { response } = error as AxiosError;
      handleSubmitError(response);
      console.log('북마크 추가 에러', error);
    }
  };

  return (
    <>
      <Wrapper onClick={handleAddButtonClick}>
        <P>북마크 추가</P>
        <BookmarkAddIcon type="add" />
      </Wrapper>
      {isModalOpen && (
        <Modal setIsModalOpen={setIsModalOpen} onComplete={handleBookmarkSubmit} title="북마크 추가하기">
          <InputWrapper>
            <Input
              name="url"
              value={form.url}
              onChange={handleFormChange}
              label="링크"
              placeholder="북마크할 링크를 입력해주세요"
            />
            <Textarea
              name="memo"
              value={form.memo}
              onChange={handleFormChange}
              label="메모"
              placeholder="이 북마크와 관련된 메모를 입력해보세요"
            />
          </InputWrapper>
        </Modal>
      )}
    </>
  );
}

const Wrapper = styled.button`
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
