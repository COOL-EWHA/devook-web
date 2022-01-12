import GithubIcon from 'src/components/assets/icons/github';
import GoogleIcon from 'src/components/assets/icons/google';
import { getQueryString } from 'src/lib/utils';

export const MOBILE_MAX_WIDTH = '60rem';
export const DESKTOP_MAX_WIDTH = '1280px';

export const NAV_ITEMS = [
  {
    iconType: 'bookmarks',
    label: '북마크 목록',
  },
  {
    iconType: 'event_available',
    label: '읽기 관리',
  },
  {
    iconType: 'feed',
    label: '추천 글 목록',
  },
];

export const SUB_ROUTES = [{ pathname: '/my', title: '마이페이지' }];

export const OAUTH_DATA = {
  google: {
    Icon: GoogleIcon,
    link: `https://accounts.google.com/o/oauth2/v2/auth${getQueryString({
      include_granted_scopes: true,
      state: 'state_parameter_passthrough_value',
      scope: 'email+profile',
      response_type: 'code',
      redirect_uri: process.env.REACT_APP_OAUTH_REDIRECT_URI,
      client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
    })}`,
  },
  github: {
    Icon: GithubIcon,
    link: `https://github.com/login/oauth/authorize${getQueryString({
      scope: 'id,name,email,avatar_url',
      redirect_uri: process.env.REACT_APP_OAUTH_REDIRECT_URI,
      client_id: process.env.REACT_APP_GITHUB_CLIENT_ID,
    })}`,
  },
};
