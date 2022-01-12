/* eslint-disable no-alert */
import { useEffect } from 'react';
import Cookies from 'js-cookie';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { useSetRecoilState, useRecoilState, useRecoilValue } from 'recoil';
import apiClient from '../api';
import { IUser } from 'src/interfaces/IUser';

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

    try {
      Cookies.remove('REFRESH_TOKEN'); // 혹시 미리 있을 수 있는 REFRESH_TOKEN 제거

      const { accessToken, refreshToken } = await authLogin('google', code);
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
