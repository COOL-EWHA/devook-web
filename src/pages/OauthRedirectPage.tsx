import React from 'react';

import { useAuthLogin } from 'src/lib/hooks';

function OauthRedirectPage() {
  useAuthLogin();

  return <div>loading...</div>;
}

export default OauthRedirectPage;
