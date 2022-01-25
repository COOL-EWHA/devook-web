import React from 'react';
import styled from 'styled-components';

import { P } from 'src/components/common';
import { GREY } from 'src/constant';

interface ISectionProps {
  type?: 'primary' | 'secondary';
  title: string;
  rightComponent?: React.ReactNode;
  children?: React.ReactNode;
}

function Section({ type = 'primary', title, rightComponent, children }: ISectionProps) {
  return (
    <Wrapper>
      <Header hasDivider={type === 'secondary'}>
        <P fontSize={type === 'primary' ? '2.2rem' : '1.8rem'} fontWeight={500}>
          {title}
        </P>
        {rightComponent}
      </Header>
      {children}
    </Wrapper>
  );
}

export default Section;

const Wrapper = styled.div`
  width: 100%;
  margin: 3.2rem 0;
`;

const Header = styled.div<{ hasDivider: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1rem;
  ${({ hasDivider }) => hasDivider && `border-bottom: 1px solid ${GREY[300]};`}
  margin-bottom: 1.2rem;
`;
