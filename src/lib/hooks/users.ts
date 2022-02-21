import { useQuery } from 'react-query';

import { deleteUser, getUser } from 'src/lib/api';
import { useAuthLogout } from '.';

export const useUserProfile = () => {
  const { isLoading, error, data } = useQuery('userProfile', getUser);

  return { isLoading, error, data };
};

export const useUserWithdraw = () => {
  const { logout } = useAuthLogout();

  const withdraw = async () => {
    try {
      await deleteUser();
      alert('회원탈퇴가 정상적으로 처리되었습니다.');
      logout({ alert: false });
    } catch (err) {
      alert('회원탈퇴가 정상적으로 처리되지 않았습니다.');
    }
  };

  return { withdraw };
};
