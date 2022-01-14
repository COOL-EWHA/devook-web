import React from 'react';
import styled from 'styled-components';

import { MaterialIcon } from 'src/components/common';
import { CACTUS_GREEN, GREY, WHITE } from 'src/styles/colors';

function ScrollToTopButton() {
  const handleClick = () => {
    window.scroll({
      behavior: 'smooth',
      top: 0,
    });
  };

  return (
    <Wrapper onClick={handleClick}>
      <MaterialIcon type="expand_less" width="2.8rem" color={CACTUS_GREEN[500]} hoverColor={CACTUS_GREEN[700]} />
    </Wrapper>
  );
}

export default ScrollToTopButton;

const Wrapper = styled.button`
  position: fixed;

  @media screen and (min-width: 1025px) {
    right: 3.2rem;
    bottom: 3.2rem;
  }

  @media screen and (max-width: 1024px) {
    right: 2rem;
    bottom: 8rem;
  }

  display: flex;
  justify-content: center;
  align-items: center;

  width: 4rem;
  height: 4rem;

  background-color: ${WHITE};
  color: ${WHITE};
  border: none;
  border-radius: 50%;
  box-shadow: rgb(0 0 0 / 10%) 0px 4px 6px, rgb(0 0 0 / 15%) 0px 8px 30px, rgb(255 255 255 / 20%) 0px 0px 0px 1px inset !important;

  transition: all 0.3s;
  :hover {
    cursor: pointer;
    background-color: ${GREY[200]};
  }
`;
