import { useEffect } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { useSetRecoilState, useRecoilState } from 'recoil';

import { authLogin, authRefresh, authTestLogin, updateAuthHeader } from 'src/lib/api';
import { accessToken, accessTokenLoading } from 'src/lib/store';

export const useAuthRefresh = () => {
  const { pathname } = useLocation();
  const setAccessToken = useSetRecoilState(accessToken);
  const [loading, setLoading] = useRecoilState(accessTokenLoading);

  useEffect(() => {
    refreshAuthTokens();
  }, []);

  const refreshAuthTokens = async () => {
    if (pathname === '/oauth-redirect') {
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      const { accessToken } = await authRefresh();
      updateAuthHeader(accessToken);
      setAccessToken(accessToken);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

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
      const { accessToken } = await authLogin(provider, code);
      alert('로그인되었습니다.');
      updateAuthHeader(accessToken);
      setAccessToken(accessToken);
      navigate('/');
    } catch (err) {
      alert('로그인에 실패하였습니다.');
    }
  };
};

// 개발, 테스트용 로그인
export const useAuthTestLogin = () => {
  const navigate = useNavigate();
  const setAccessToken = useSetRecoilState(accessToken);

  const testLogin = async (email: string) => {
    try {
      const { accessToken } = await authTestLogin(email);
      alert('로그인되었습니다.');
      updateAuthHeader(accessToken);
      setAccessToken(accessToken);
      navigate('/');
    } catch (err) {
      alert('로그인에 실패하였습니다.');
    }
  };

  return { testLogin };
};
