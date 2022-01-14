import React from 'react';

import { useAuthLogin } from 'src/lib/hooks/auth';

function OauthRedirectPage() {
  useAuthLogin();

  return <div>loading...</div>;
}

export default OauthRedirectPage;
