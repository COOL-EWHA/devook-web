import React from 'react';
import styled from 'styled-components';

import { Button } from 'src/components/common';

export default {
  title: 'Button',
  component: Button,
};

export function TextButton() {
  return (
    <>
      <StyledButton size="large" type="primary" text="글 읽기" isBlock />
      <StyledButton size="large" type="line" text="글 읽기" isBlock />
      <StyledButton size="large" type="text" text="글 읽기" isBlock />
      <StyledButton type="primary" text="글 읽기" isBlock />
      <StyledButton type="line" text="글 읽기" isBlock />
      <StyledButton type="text" text="글 읽기" isBlock />
      <StyledButton size="small" type="primary" text="수정" />
      <StyledButton size="small" type="line" text="수정" />
      <StyledButton size="small" type="text" text="수정" />
    </>
  );
}

export function TextButtonWithIcon() {
  return (
    <>
      <StyledButton iconType="delete_outline" size="large" type="primary" text="삭제" />
      <StyledButton iconType="delete_outline" size="large" type="line" text="삭제" />
      <StyledButton iconType="delete_outline" size="large" type="text" text="삭제" />
      <StyledButton iconType="delete_outline" type="primary" text="삭제" />
      <StyledButton iconType="delete_outline" type="line" text="삭제" />
      <StyledButton iconType="delete_outline" type="text" text="삭제" />
      <StyledButton iconType="restart_alt" size="small" type="primary" text="초기화" />
      <StyledButton iconType="restart_alt" size="small" type="line" text="초기화" />
      <StyledButton iconType="restart_alt" size="small" type="text" text="초기화" />
    </>
  );
}

const StyledButton = styled(Button)`
  margin-bottom: 1.2rem;
`;
