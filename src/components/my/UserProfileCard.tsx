import React from 'react';
import styled from 'styled-components';

import { P } from 'src/components/common';
import { GREY } from 'src/constant';

import { useUserProfile } from 'src/lib/hooks';

function UserProfileCard() {
  const { data } = useUserProfile();

  if (!data) return null;

  const { email, nickname } = data;

  return (
    <Wrapper>
      <P fontSize="1.6rem" fontWeight={500}>
        {nickname}님 안녕하세요!
      </P>
      <P fontSize="1.2rem" color={GREY[600]}>
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
  height: 7rem;
`;
