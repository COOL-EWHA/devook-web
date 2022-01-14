import React from 'react';
import styled from 'styled-components';

import { GREY } from 'src/constant';

import { useUserProfile } from 'src/lib/hooks';

function UserProfileCard() {
  const { data } = useUserProfile();

  if (!data) return null;

  const { email, nickname } = data;

  return (
    <Wrapper>
      <UserName>{nickname}님 안녕하세요!</UserName>
      <Email>{email}</Email>
    </Wrapper>
  );
}

export default UserProfileCard;

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
