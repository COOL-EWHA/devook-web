import React from 'react';
import { Routes, Route } from 'react-router-dom';

import MainLayout from 'src/layout/MainLayout';
import { BookmarkDetailPage, BookmarkListPage, OauthRedirectPage } from 'src/pages';

import { useAuthRefresh } from 'src/lib/hooks';

function App() {
  useAuthRefresh();

  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<BookmarkListPage />} />
        <Route path="/oauth-redirect" element={<OauthRedirectPage />} />
        <Route path="/bookmarks/:id" element={<BookmarkDetailPage />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
