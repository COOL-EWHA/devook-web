import React from 'react';
import styled from 'styled-components';

import { GREY } from 'src/constant';

export interface IPProps extends React.HTMLAttributes<HTMLParagraphElement> {
  className?: string;
  fontSize?: number | string;
  fontWeight?: number;
  color?: string;
  width?: string;
  height?: string;
  textAlign?: string;
  textDecoration?: 'none' | 'line-through' | ' overline' | 'underline' | ' initial' | ' inherit';
  lineHeight?: number | string;
  ellipsis?: boolean;
  numOfLines?: number;
}

function P(props: IPProps) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <StyledP {...props} />;
}

const StyledP = styled.p<IPProps>`
  ${({
    fontSize,
    fontWeight,
    color,
    width,
    height,
    textAlign,
    textDecoration,
    lineHeight,
    ellipsis,
    numOfLines,
  }: IPProps) => {
    return `
      padding: 0;
      margin: 0;
      font-size:${fontSize ?? '1.4rem'};
      font-weight: ${fontWeight ?? 'normal'};
      color: ${color ?? GREY[900]};
      width: ${width ?? 'fit-content'};
      height: ${height ?? 'fit-content'};
      text-align: ${textAlign ?? 'left'};
      text-decoration: ${textDecoration ?? 'none'};
      line-height: ${lineHeight ?? 'normal'};
      ${
        ellipsis &&
        numOfLines &&
        ` overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: ${numOfLines};
          -webkit-box-orient: vertical;
          word-wrap: break-word;
          `
      }
      `;
  }}
`;

export default React.memo(P);
