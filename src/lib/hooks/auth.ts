import { useEffect } from 'react';
import Cookies from 'js-cookie';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { useSetRecoilState, useRecoilState, useRecoilValue } from 'recoil';

import { apiClient } from 'src/lib/api';
import { accessToken, accessTokenLoading } from 'src/lib/store/auth';
import { AuthTokens } from 'src/types';
import { IUser } from 'src/interfaces';

type AuthToken = 'accessToken' | 'refreshToken';

export const useAuthHeaderConfig = (token: AuthToken = 'accessToken') => {
  const accessTokenValue = useRecoilValue(accessToken);
  return {
    headers: {
      Authorization: `Bearer ${token === 'accessToken' ? accessTokenValue : Cookies.get('REFRESH_TOKEN')}`,
    },
  };
};

export const useAuthRefresh = () => {
  const { pathname } = useLocation();
  const authHeaderConfig = useAuthHeaderConfig('refreshToken');
  const setAccessToken = useSetRecoilState(accessToken);
  const [loading, setLoading] = useRecoilState(accessTokenLoading);

  useEffect(() => {
    refreshAuthTokens();
  }, []);

  const refreshAuthTokens = async () => {
    if (pathname === '/oauth-redirect' || !Cookies.get('REFRESH_TOKEN')) {
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      const { accessToken, refreshToken } = await authRefresh();
      setAccessToken(accessToken);
      Cookies.set('REFRESH_TOKEN', refreshToken);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  const authRefresh = async (): Promise<AuthTokens> =>
    apiClient.post('/auth/refresh', null, authHeaderConfig).then((res) => res.data);

  return { loading };
};

export const useAuthLogin = () => {
  const [searchParams, _] = useSearchParams();
  const navigate = useNavigate();
  const setAccessToken = useSetRecoilState(accessToken);

  useEffect(() => {
    login();
  }, []);

  const login = async () => {
    const code = searchParams.get('code');
    if (!code) {
      return;
    }

    const scope = searchParams.get('scope');
    const provider = scope?.includes('google') ? 'google' : 'github';

    try {
      Cookies.remove('REFRESH_TOKEN'); // 혹시 미리 있을 수 있는 REFRESH_TOKEN 제거
      const { accessToken, refreshToken } = await authLogin(provider, code);
      alert('로그인 성공!');
      setAccessToken(accessToken);

      // 개발 환경에서는 httpOnly 쿠키 set 안 되는 상태이기 때문에 해당 코드 추가
      if (!Cookies.get('REFRESH_TOKEN')) {
        Cookies.set('REFRESH_TOKEN', refreshToken);
      }
      navigate('/');
    } catch (err) {
      alert('로그인 실패!');
    }
  };

  const authLogin = async (provider: string, code: string): Promise<IUser> =>
    apiClient.post(`/auth/login/${provider}`, { code }).then((res) => res.data);
};

// 개발, 테스트용 로그인
export const useAuthTestLogin = () => {
  const navigate = useNavigate();
  const setAccessToken = useSetRecoilState(accessToken);

  const testLogin = async (email: string) => {
    try {
      Cookies.remove('REFRESH_TOKEN'); // 혹시 미리 있을 수 있는 REFRESH_TOKEN 제거

      const { accessToken, refreshToken } = await authTestLogin(email);
      alert('로그인 성공!');
      setAccessToken(accessToken);

      // 개발 환경에서는 httpOnly 쿠키 set 안 되는 상태이기 때문에 해당 코드 추가
      if (!Cookies.get('REFRESH_TOKEN')) {
        Cookies.set('REFRESH_TOKEN', refreshToken);
      }
      navigate('/');
    } catch (err) {
      alert('로그인 실패!');
    }
  };

  const authTestLogin = async (email: string): Promise<IUser> =>
    apiClient.post('/auth/test-login', { email }).then((res) => res.data);

  return { testLogin };
};
