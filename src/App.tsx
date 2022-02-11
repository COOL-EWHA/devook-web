import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import relativeTime from 'dayjs/plugin/relativeTime';

import MainLayout from 'src/layout/MainLayout';
import { useAuthRefresh } from 'src/lib/hooks';

const FurtherReadPage = lazy(() => import('./pages/FurtherReadPage'));
const OauthRedirectPage = lazy(() => import('./pages/OauthRedirectPage'));
const BookmarkListPage = lazy(() => import('./pages/BookmarkListPage'));
const BookmarkDetailPage = lazy(() => import('./pages/BookmarkDetailPage'));
const ToReadPage = lazy(() => import('./pages/ToReadPage'));

function App() {
  dayjs.locale('ko');
  dayjs.extend(relativeTime);
  useAuthRefresh();

  return (
    <MainLayout>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<FurtherReadPage />} />
          <Route path="/oauth-redirect" element={<OauthRedirectPage />} />
          <Route path="/bookmarks" element={<BookmarkListPage />} />
          <Route path="/bookmarks/:id" element={<BookmarkDetailPage />} />
          <Route path="/to-read" element={<ToReadPage />} />
        </Routes>
      </Suspense>
    </MainLayout>
  );
}

export default App;
