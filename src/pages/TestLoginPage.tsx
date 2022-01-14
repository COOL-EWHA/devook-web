import React from 'react';

import { useAuthTestLogin } from 'src/lib/hooks';

const TEST_EMAIL_1 = process.env.REACT_APP_TEST_EMAIL_1 as string;

function TestLoginPage() {
  const { testLogin } = useAuthTestLogin();

  // eslint-disable-next-line react/button-has-type
  return <button onClick={() => testLogin(TEST_EMAIL_1)}>효진 로그인</button>;
}

export default TestLoginPage;
