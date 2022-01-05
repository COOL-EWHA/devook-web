import React from 'react';
import styled from 'styled-components';

import { GREY } from '@/data/colors';

interface ISearchBarProps {
  className: string;
}

function SearchBar({ className }: ISearchBarProps) {
  return (
    <SearchBarWrapper className={className}>
      <SearchIconWrapper>
        <span className="material-icons">search</span>
      </SearchIconWrapper>
      <SearchBarInput placeholder="Search on Devook" />
    </SearchBarWrapper>
  );
}

export default SearchBar;

const SearchBarWrapper = styled.div<ISearchBarProps>`
  position: relative;

  width: 100%;
  height: 2.5rem;
`;

const SearchIconWrapper = styled.div`
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

const SearchBarInput = styled.input`
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
