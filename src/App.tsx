import React from 'react';

import GlobalStyle from 'src/styles/global';
import MainLayout from 'src/layout/MainLayout';

function App() {
  return (
    <>
      <GlobalStyle />
      <MainLayout>
        <p>hi</p>
      </MainLayout>
    </>
  );
}

export default App;
