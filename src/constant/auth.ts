import { GithubIcon, GoogleIcon } from 'src/components/assets/icons';
import { getQueryString } from 'src/lib/utils';

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
