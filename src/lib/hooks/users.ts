import { useQuery } from 'react-query';
import Cookies from 'js-cookie';
import { AxiosResponse } from 'axios';
import { useSetRecoilState } from 'recoil';

import apiClient from 'src/lib/api';
import { accessToken } from 'src/lib/store/auth';
import { useAuthHeaderConfig } from './auth';
import { UserProfile } from 'src/types/user';

export const useUserProfile = () => {
  const authHeaderConfig = useAuthHeaderConfig();
  const getUser = async (): Promise<AxiosResponse<UserProfile, any>> => apiClient.get('/users', authHeaderConfig);
  const { isLoading, error, data } = useQuery('userProfile', getUser);

  return { isLoading, error, data: data?.data };
};

export const useUserLogout = () => {
  const setAccessToken = useSetRecoilState(accessToken);

  const logout = (param = { alert: true }) => {
    setAccessToken(undefined);
    Cookies.remove('REFRESH_TOKEN');
    if (param.alert === true) {
      alert('로그아웃되었습니다!');
    }
  };

  return { logout };
};

export const useUserWithdraw = () => {
  const authHeaderConfig = useAuthHeaderConfig();
  const { logout } = useUserLogout();

  const withdraw = async () => {
    try {
      await deleteUser();
      alert('회원탈퇴가 정상적으로 처리되었습니다.');
      logout({ alert: false });
    } catch (err) {
      alert('회원탈퇴가 정상적으로 처리되지 않았습니다.');
      console.log(err);
    }
  };

  const deleteUser = async (): Promise<void> => apiClient.delete('/users', authHeaderConfig).then((res) => res.data);

  return { withdraw };
};
