import { useEffect } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { useSetRecoilState, useRecoilValue, useRecoilState } from 'recoil';

import { authLogin, authLogout, authRefresh, authTestLogin, initAuthHeader, updateAuthHeader } from 'src/lib/api';
import { isAuthLoading, accessToken, isMySidebarOpen, isUserLoggedIn } from 'src/lib/store';

export const useAuthRefresh = () => {
  const { pathname } = useLocation();
  const [searchParams, _] = useSearchParams();
  const refreshToken = searchParams.get('rt');
  const setLoading = useSetRecoilState(isAuthLoading);
  const setAccessToken = useSetRecoilState(accessToken);

  useEffect(() => {
    refreshAuthTokens();
  }, []);

  const refreshAuthTokens = async () => {
    if (pathname === '/oauth-redirect') {
      return;
    }

    setLoading(true);
    try {
      const { accessToken } = await authRefresh(refreshToken);
      updateAuthHeader(accessToken);
      setAccessToken(accessToken);
      window.AuthChannel?.postMessage('refresh');
    } catch (_) {
      //
    } finally {
      setLoading(false);
    }
  };
};

export const useAuthLogin = () => {
  const [searchParams, _] = useSearchParams();
  const navigate = useNavigate();
  const setLoading = useSetRecoilState(isAuthLoading);
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
    const provider = scope?.includes('google') ? 'google' : 'apple';
    setLoading(true);
    try {
      const { accessToken, refreshToken } = await authLogin(provider, code);
      alert('로그인되었습니다.');
      updateAuthHeader(accessToken);
      setAccessToken(accessToken);
      window.AuthChannel?.postMessage(`login:${refreshToken}`);
      window.DeviceChannel?.postMessage(`login:${accessToken}`);
      navigate('/');
    } catch (err) {
      alert('로그인에 실패하였습니다.');
    } finally {
      setLoading(false);
    }
  };
};

// 개발, 테스트용 로그인
export const useAuthTestLogin = () => {
  const navigate = useNavigate();
  const setLoading = useSetRecoilState(isAuthLoading);
  const setAccessToken = useSetRecoilState(accessToken);

  const testLogin = async () => {
    setLoading(true);
    try {
      const { accessToken } = await authTestLogin(process.env.REACT_APP_TEST_REFRESH_TOKEN as string);
      alert('로그인되었습니다.');
      updateAuthHeader(accessToken);
      setAccessToken(accessToken);
      navigate('/');
    } catch (err) {
      alert('로그인에 실패하였습니다.');
    } finally {
      setLoading(false);
    }
  };

  return { testLogin };
};

export const useLoginStatus = () => {
  const isLoggedIn = useRecoilValue(isUserLoggedIn);
  const setIsSidebarOpen = useSetRecoilState(isMySidebarOpen);

  const checkIsLoggedIn = () => {
    if (isLoggedIn) return true;
    alert('로그인이 필요한 기능입니다.');
    setIsSidebarOpen(true);
    return false;
  };

  return { checkIsLoggedIn };
};

export const useAuthLogout = () => {
  const setLoading = useSetRecoilState(isAuthLoading);
  const [accessTokenValue, setAccessToken] = useRecoilState(accessToken);
  const setIsSidebarOpen = useSetRecoilState(isMySidebarOpen);

  const logout = async (param = { alert: true }) => {
    setLoading(true);
    try {
      await authLogout();
      window.AuthChannel?.postMessage('logout');
      window.DeviceChannel?.postMessage(`logout:${accessTokenValue}`);
      initAuthHeader();
      setAccessToken('');
      setIsSidebarOpen(false);
      if (param.alert) {
        alert('로그아웃되었습니다.');
      }
    } catch (err) {
      alert('로그아웃에 실패하였습니다.');
    } finally {
      setLoading(false);
    }
  };
  return { logout };
};
