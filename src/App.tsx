import React from 'react';
import { Routes, Route } from 'react-router-dom';

import MainLayout from 'src/layout/MainLayout';
import { BookmarkDetailPage, BookmarkListPage, MyPage, OauthRedirectPage } from 'src/pages';

import { useAuthRefresh } from 'src/lib/hooks';

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
            <Route path="/bookmarks/:id" element={<BookmarkDetailPage />} />
          </>
        )}
      </Routes>
    </MainLayout>
  );
}

export default App;
