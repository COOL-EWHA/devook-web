import { useQuery } from 'react-query';
import Cookies from 'js-cookie';
import { AxiosResponse } from 'axios';
import { useSetRecoilState } from 'recoil';

import { accessToken } from 'src/lib/store';
import { deleteUser, getUser, initAuthHeader } from 'src/lib/api';

export const useUserProfile = () => {
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

  return { withdraw };
};
