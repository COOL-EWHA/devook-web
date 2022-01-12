import React, { useState } from 'react';
import styled from 'styled-components';
import { AxiosError } from 'axios';

import { MaterialIcon, Modal, Input, Textarea } from 'src/components/common';
import { GREY } from 'src/styles/colors';

import { useAuthHeaderConfig } from 'src/lib/hooks/auth';
import { addToBookmarkList } from 'src/lib/api/bookmark';

export default function AddButton() {
  const authHeaderConfig = useAuthHeaderConfig();

  const [isModalOpened, setIsModalOpened] = useState(false);

  const [url, setUrl] = useState('');
  const [memo, setMemo] = useState('');

  const handleAddButtonClick = () => {
    setIsModalOpened(true);
  };

  const handleErrorStatus = (status?: number) => {
    if (status === 401) {
      alert('로그인을 먼저 해주세요!');
      return;
    }
    alert('북마크 추가과정에서 오류가 발생하였습니다!');
  };

  const handleCompleteButtonClick = async () => {
    if (!url) {
      alert('링크를 입력해주세요!');
      return;
    }
    try {
      await addToBookmarkList({ url, memo, authHeaderConfig });
      alert('북마크에 추가되었습니다!');
      setIsModalOpened(false);
    } catch (error) {
      const { response } = error as AxiosError;
      handleErrorStatus(response?.status);
      console.log('북마크 추가 에러', error);
    }
  };

  return (
    <>
      <Wrapper onClick={handleAddButtonClick}>
        <P>북마크 추가</P>
        <BookmarkAddIcon type="add" width="2.4rem" />
      </Wrapper>
      {isModalOpened && (
        <Modal setIsModalOpened={setIsModalOpened} onComplete={handleCompleteButtonClick} title="북마크 추가하기">
          <InputWrapper>
            <Input
              label="링크 추가"
              placeholder="북마크할 링크를 추가해주세요"
              onChange={(e) => {
                setUrl(e.target.value);
              }}
            />
            <Textarea
              label="메모 추가"
              placeholder="이 북마크와 관련된 메모를 추가해보세요"
              onChange={(e) => {
                setMemo(e.target.value);
              }}
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
    border-radius: 8px;
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
