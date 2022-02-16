import React from 'react';
import styled from 'styled-components';

import { MaterialIcon, P } from 'src/components/common';
import { GREY } from 'src/constant';

interface INoResultProps {
  iconType?: string;
  target: string;
}

function NoResult({ iconType, target }: INoResultProps) {
  return (
    <Wrapper>
      {iconType && <MaterialIcon type={iconType} color={GREY[400]} width="6rem" disabled />}
      <Description>{target} 없습니다</Description>
    </Wrapper>
  );
}

export default NoResult;

const Wrapper = styled.div`
  height: 85%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Description = styled(P).attrs({ fontSize: '1.6rem', color: GREY[600] })`
  margin-top: 1rem;
`;
