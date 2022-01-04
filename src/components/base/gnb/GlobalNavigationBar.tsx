import React from 'react';
import styled from 'styled-components';

import { GREY } from '@/data/colors';

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
  bottom: 0;

  width: 100vw;
  max-width: 60rem;
  height: 6rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 2rem;
  border-top: 1px solid ${GREY[300]};
`;

const NavigatorBlock = styled.div`
  display: flex;
  flex-direction: column;

  color: ${GREY[700]};

  .material-icons {
    text-align: center;
  }
`;

const NavigatorLabel = styled.p`
  font-size: 1.2rem;
`;
