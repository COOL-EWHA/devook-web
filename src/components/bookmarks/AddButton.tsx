import React, { useState } from 'react';
import styled from 'styled-components';

import { MaterialIcon, Modal } from 'src/components/common';
import { GREY } from 'src/styles/colors';

// @TO_BE_IMPROVED: 로그인 안된 상태에서는 안보이도록
export default function AddButton() {
  const [isModalOpened, setIsModalOpened] = useState(false);

  const handleAddButtonClick = () => {
    setIsModalOpened(true);
  };

  return (
    <>
      <Wrapper onClick={handleAddButtonClick}>
        <P>북마크 추가</P>
        <BookmarkAddIcon type="add" width="2.4rem" />
      </Wrapper>
      {isModalOpened && <Modal setIsModalOpened={setIsModalOpened} title="북마크 추가하기" />}
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
