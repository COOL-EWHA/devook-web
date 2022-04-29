import { AppleIcon, GoogleIcon } from 'src/components/assets/icons';
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
  apple: {
    Icon: AppleIcon,
    link: `https://appleid.apple.com/auth/authorize${getQueryString({
      client_id: process.env.REACT_APP_APPLE_CLIENT_ID,
      redirect_uri: process.env.REACT_APP_OAUTH_REDIRECT_URI,
      response_type: 'code',
      scope: 'name email',
      response_mode: 'form_post',
    })}`,
  },
};
