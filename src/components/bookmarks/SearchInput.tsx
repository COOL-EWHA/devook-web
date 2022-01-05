import React from 'react';
import styled from 'styled-components';

import { GREY } from '@/styles/colors';
import { Icon } from '@/components/common';

function SearchInput() {
  return (
    <Wrapper>
      <SearchIcon>search</SearchIcon>
      <Input placeholder="북마크 검색" />
    </Wrapper>
  );
}

export default SearchInput;

const Wrapper = styled.div`
  position: relative;
  height: 2.5rem;
`;

const Input = styled.input`
  width: 100%;
  height: 100%;

  padding-left: 3rem;
  border-radius: 8px;
  background-color: ${GREY[300]};
  border: none;
  outline: none;
  font-size: 1rem;

  ::placeholder {
    color: ${GREY[600]};
  }
`;

const SearchIcon = styled(Icon)`
  position: absolute;
  width: 3rem;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  .material-icons {
    font-size: 1.5rem;
    color: ${GREY[600]};
  }
`;
