import React from 'react';
import { Routes, Route } from 'react-router-dom';

import MainLayout from 'src/layout/MainLayout';
import { BookmarkListPage, MyPage, OauthRedirectPage, TestLoginPage } from 'src/pages';

import { useAuthRefresh } from 'src/lib/hooks/auth';

function App() {
  const { loading } = useAuthRefresh();

  return (
    <MainLayout>
      <Routes>
        {!loading && (
          <>
            <Route path="/" element={<BookmarkListPage />}>
              <Route path="my" element={<MyPage />} />
            </Route>
            <Route path="/oauth-redirect" element={<OauthRedirectPage />} />
            <Route path="/test-login" element={<TestLoginPage />} />
          </>
        )}
      </Routes>
    </MainLayout>
  );
}

export default App;
