import React from 'react';

import { TagResetButton } from 'src/components/common';
import { postListFilter } from 'src/lib/store';

function RecommendedPostTagResetButton() {
  return <TagResetButton filterType={postListFilter} />;
}

export default RecommendedPostTagResetButton;
