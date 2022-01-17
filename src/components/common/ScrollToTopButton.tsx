import React from 'react';

import { FixedButton } from 'src/components/common';

function ScrollToTopButton() {
  const handleClick = () => {
    window.scroll({
      behavior: 'smooth',
      top: 0,
    });
  };

  return <FixedButton type="scroll" iconType="expand_less" onClick={handleClick} />;
}

export default ScrollToTopButton;
