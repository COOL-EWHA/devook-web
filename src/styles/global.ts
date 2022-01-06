import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  * {
    box-sizing: border-box;
    font-family: 'Noto Sans KR', sans-serif;
  }

  body {
    margin: 0;
    font-family: 'Noto Sans KR', sans-serif;
  }

  p {
    line-height: 1.5;
  }

  @media (max-width:319px)  {
    /* smartphones, iPhone, portrait 480x320 phones */
    html{
      font-size: 9.5px;
    } 
  }
  @media (min-width:320px)  {
    /* smartphones, iPhone, portrait 480x320 phones */
    html{
      font-size: 10px;
    } 
  }
  @media (min-width:481px)  {
    /* portrait e-readers (Nook/Kindle), smaller tablets @ 600 or @ 640 wide. */
    html{
      font-size: 10.5px;
    } 
  }
  @media (min-width:641px)  { 
    /* portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones */
    html{
      font-size: 11px;
    } 
  }
  @media (min-width:961px)  { 
    /* tablet, landscape iPad, lo-res laptops ands desktops */
    html{
      font-size: 11.5px;
    } 
  }
  @media (min-width:1025px) { 
    /* big landscape tablets, laptops, and desktops */
    html{
      font-size: 11.5px;
    } 
  }
  @media (min-width:1281px) { 
    /* hi-res laptops and desktops */
    html{
      font-size: 12px;
    } 
  }
`;

export default GlobalStyle;
