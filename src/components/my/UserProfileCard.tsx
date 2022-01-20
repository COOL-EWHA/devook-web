import React from 'react';
import styled from 'styled-components';

import { P } from 'src/components/common';
import { CACTUS_GREEN, GREY } from 'src/constant';

import { useUserProfile } from 'src/lib/hooks';

function UserProfileCard() {
  const { data } = useUserProfile();

  if (!data) return null;

  const { email, nickname } = data;

  return (
    <Wrapper>
      <P fontSize="1.8rem" fontWeight={500}>
        <Nickname>{nickname}</Nickname>님 안녕하세요!
      </P>
      <P fontSize="1.4rem" color={GREY[600]}>
        {email}
      </P>
    </Wrapper>
  );
}

export default UserProfileCard;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 0.8rem;
  margin-bottom: auto;
`;

const Nickname = styled.strong`
  font-weight: 700;
  color: ${CACTUS_GREEN[700]};
`;
