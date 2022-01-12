import React from 'react';
import { Routes, Route } from 'react-router-dom';

import My from 'src/pages/my';
import BookmarkListPage from './pages/bookmarks';
import TestLogin from './components/TestLogin';
import OauthRedirect from './components/OauthRedirect';
import { useAuthRefresh } from 'src/lib/hooks/auth';
import MainLayout from 'src/layout/MainLayout';

function App() {
  const { loading } = useAuthRefresh();

  return (
    <MainLayout>
      <Routes>
        {!loading && (
          <>
            <Route path="/" element={<BookmarkListPage />}>
              <Route path="my" element={<My />} />
            </Route>
            <Route path="/oauth-redirect" element={<OauthRedirect />} />
            <Route path="/test-login" element={<TestLogin />} />
          </>
        )}
      </Routes>
    </MainLayout>
  );
}

export default App;
