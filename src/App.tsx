import React from 'react';
import { Routes, Route } from 'react-router-dom';

import MainLayout from 'src/layout/MainLayout';
import MyPage from 'src/pages/MyPage';
import BookmarkListPage from 'src/pages/BookmarkListPage';
import OauthRedirectPage from 'src/pages/OauthRedirectPage';
import TestLoginPage from 'src/pages/TestLoginPage';

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
