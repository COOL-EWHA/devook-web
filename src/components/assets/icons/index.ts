import AppleIcon from './apple';
import GoogleIcon from './google';
import LogoIcon from './logo';

export type IconProps = {
  style?: React.CSSProperties;
  fill?: string;
  fillIn?: string;
  fillOut?: string;
  fillDot?: string;
  onClick?: (e?: React.MouseEvent<HTMLElement, MouseEvent>) => void;
};

export { AppleIcon, GoogleIcon, LogoIcon };
