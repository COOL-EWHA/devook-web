import React from 'react';
import styled from 'styled-components';

import { GREY } from '@/styles/colors';
import { MOBILE_MAX_WIDTH } from '@/constant';

function GlobalNavigationBar() {
  return (
    <GlobalNavigationBarWrapper>
      <NavigatorBlock>
        <span className="material-icons">bookmarks</span>
        <NavigatorLabel>북마크 목록</NavigatorLabel>
      </NavigatorBlock>
      <NavigatorBlock>
        <span className="material-icons">event_available</span>
        <NavigatorLabel>읽기 관리</NavigatorLabel>
      </NavigatorBlock>
      <NavigatorBlock>
        <span className="material-icons">feed</span>
        <NavigatorLabel>추천글 목록</NavigatorLabel>
      </NavigatorBlock>
    </GlobalNavigationBarWrapper>
  );
}

export default GlobalNavigationBar;

const GlobalNavigationBarWrapper = styled.div`
  position: fixed;
  display: flex;

  @media screen and (min-width: 1024px) {
    top: 98px;

    width: 200px;
    height: 200px;

    flex-direction: column;
    justify-content: space-evenly;

    padding: 24px;
    border-radius: 8px;
    border: 1px dashed ${GREY[400]};
  }

  @media screen and (max-width: 1023px) {
    bottom: 0;

    width: 100vw;
    max-width: ${MOBILE_MAX_WIDTH};
    height: 6rem;

    justify-content: space-between;
    align-items: center;

    padding: 0 2rem;
    border-top: 1px solid ${GREY[300]};
  }
`;

const NavigatorBlock = styled.div`
  display: flex;
  flex-direction: column;

  color: ${GREY[700]};

  .material-icons {
    text-align: center;
    font-size: 1.8rem;

    @media screen and (min-width: 1024px) {
      display: none;
    }
  }
`;

const NavigatorLabel = styled.p`
  font-size: 1.2rem;
`;
