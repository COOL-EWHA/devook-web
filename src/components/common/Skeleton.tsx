import React from 'react';
import styled, { keyframes } from 'styled-components';

import { GREY } from 'src/constant';

interface ISkeletonProps {
  width?: string;
  height: string;
  margin?: string;
}

export default function Skeleton({ width, height, margin }: ISkeletonProps) {
  return <Wrapper width={width} height={height} margin={margin} />;
}

const loadingGradient = keyframes`
  0% {
      background-color: rgba(165, 165, 165, 0.1);
  }
  50% {
      background-color: rgba(165, 165, 165, 0.2);
  }
  100% {
      background-color: rgba(165, 165, 165, 0.1);
  }
`;

const Wrapper = styled.div<ISkeletonProps>`
  animation: ${loadingGradient} 1.8s infinite ease-in-out;
  border-radius: 0.4rem;
  background-color: ${GREY[200]};

  ${({ width, height, margin }) => `
    width: ${width ?? '100%'};
    height: ${height};
    margin: ${margin ?? 0};
    `}
`;
