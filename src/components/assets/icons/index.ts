import GithubIcon from './github';
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

export { GithubIcon, GoogleIcon, LogoIcon };
