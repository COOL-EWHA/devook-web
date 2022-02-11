import React from 'react';
import styled from 'styled-components';

import { Checkbox } from 'src/components/common';

import { useBookmarkIsReadEdit } from 'src/lib/hooks';

interface IBookmarkIsReadCheckboxProps {
  id: number;
  isRead?: boolean;
}

export default function BookmarkIsReadCheckbox({ id, isRead }: IBookmarkIsReadCheckboxProps) {
  const { toggle } = useBookmarkIsReadEdit({ id, isRead });

  return (
    <Wrapper>
      <Checkbox id={String(id)} isChecked={isRead} toggle={toggle} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 0.2rem 0.8rem 0 0;
`;
