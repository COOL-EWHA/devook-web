import React from 'react';

import { Button } from 'src/components/common';

function BookmarkTagResetButton() {
  const handleClick = () => {
    // @TO_BE_IMPROVED: 선택된 태그 목록 -> 전역 상태로 관리
  };

  return <Button iconType="restart_alt" text="초기화" buttonType="line" onClick={handleClick} />;
}

export default BookmarkTagResetButton;
