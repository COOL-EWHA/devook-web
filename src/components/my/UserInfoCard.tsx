import React from 'react';
import styled from 'styled-components';

import { GREY } from 'src/styles/colors';

function UserInfoCard() {
  return (
    <Wrapper>
      <UserName>eunko님 안녕하세요!</UserName>
      <Email>koeun0712@ewhain.net</Email>
    </Wrapper>
  );
}

export default UserInfoCard;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 7rem;
`;

const UserName = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  color: ${GREY[800]};
`;

const Email = styled.p`
  font-size: 1.2rem;
  color: ${GREY[600]};
`;
