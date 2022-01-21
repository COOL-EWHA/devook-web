import React from 'react';

import { Button } from 'src/components/common';
import { useBookmarkTag } from 'src/lib/hooks';

function BookmarkTagResetButton() {
  const { resetTag: handleClick } = useBookmarkTag();

  return <Button iconType="restart_alt" text="초기화" buttonType="line" onClick={handleClick} iconWidth="1.8rem" />;
}

export default BookmarkTagResetButton;
