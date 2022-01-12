import React from 'react';

import { useAuthLogin } from 'src/lib/hooks/auth';

function OauthRedirect() {
  useAuthLogin();

  return <div>loading...</div>;
}

export default OauthRedirect;
