import React from 'react';
import styled from 'styled-components';

import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <GlobalStyle />
      <P>test</P>
    </>
  );
}

const P = styled.p`
  font-size: 1.4rem;
  padding: 1.2rem;
  background-color: yellow;
  width: 4rem;
`;

export default App;
