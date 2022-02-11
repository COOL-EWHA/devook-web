import React from 'react';
import { GREY } from 'src/constant';
import styled from 'styled-components';

export type ImgProps = {
  src: string;
  alt: string;
  className?: string;
  width?: string | number;
  height?: string | number;
  circle?: boolean;
  cover?: boolean;
  border?: boolean;
};

function Img(props: ImgProps) {
  const handleErrror = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = '/favicon.svg';
  };

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <StyledImg onError={handleErrror} {...props} />;
}

export default React.memo(Img);

const StyledImg = styled.img<ImgProps>`
  ${({ width, height, circle, cover = true, border }) => `
    width: ${width || '100%'};
    height: ${height || '100%'};
    box-sizing: border-box;
    object-fit: ${cover ? 'cover' : 'fill'};
    border: ${border ? `0.1rem solid ${GREY[400]}` : ''};
    border-radius: ${circle ? '50%' : '0.4rem'};
  `}
`;
