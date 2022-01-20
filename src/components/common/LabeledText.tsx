import React from 'react';
import styled from 'styled-components';

import { P } from 'src/components/common';
import { GREY } from 'src/constant';

interface ILabeledTextProps {
  label: string;
  value?: string;
}

function LabeledText({ label, value }: ILabeledTextProps) {
  return (
    <Wrapper>
      <P>{label}</P>
      <P color={GREY[700]}>{value}</P>
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
