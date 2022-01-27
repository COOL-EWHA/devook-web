import React from 'react';

import { ScrollToTopButton } from 'src/components/common';
import { PostTagListOpenButton } from 'src/components//posts';

function FixedButtons() {
  return (
    <>
      <PostTagListOpenButton />
      <ScrollToTopButton />
    </>
  );
}

export default FixedButtons;
