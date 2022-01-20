import React from 'react';
import styled from 'styled-components';

import { P, Button, Modal, Input, Textarea } from 'src/components/common';
import { useBookmarkDetail, useBookmarkMemoEdit } from 'src/lib/hooks';
import { GREY } from 'src/constant';

interface ISectionProps {
  type?: 'primary' | 'secondary';
  title: string;
  isEditable?: boolean;
  children?: React.ReactNode;
}

function Section({ type = 'primary', title, isEditable = false, children }: ISectionProps) {
  const { data } = useBookmarkDetail();
  const { isModalOpen, openModal, onSubmit, onChange, memo, setIsModalOpen } = useBookmarkMemoEdit();

  return (
    <>
      <Wrapper>
        <Header>
          <P fontSize={type === 'primary' ? '2.2rem' : '1.8rem'} fontWeight={type === 'primary' ? 500 : 'normal'}>
            {title}
          </P>
          {isEditable && <Button buttonType="text" text="수정" color="GREY" onClick={openModal} />}
        </Header>
        {children}
      </Wrapper>
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

export default Section;

const Wrapper = styled.div`
  width: 100%;
  margin: 2rem 0;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${GREY[300]};
  margin-bottom: 1.2rem;
`;

const InputWrapper = styled.div`
  padding: 2rem;
`;
