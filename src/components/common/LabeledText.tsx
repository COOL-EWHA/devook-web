import React from 'react';
import styled from 'styled-components';

import { P } from 'src/components/common';

interface ILabeledTextProps {
  label: string;
  value?: string;
}

function LabeledText({ label, value }: ILabeledTextProps) {
  return (
    <Wrapper>
      <P fontSize="1.6rem" fontWeight={500}>
        {label}
      </P>
      <P fontSize="1.6rem">{value}</P>
    </Wrapper>
  );
}

export default LabeledText;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.6rem;
`;
