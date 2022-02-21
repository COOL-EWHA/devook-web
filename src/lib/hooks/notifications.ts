import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useInfiniteQuery } from 'react-query';
import { useSetRecoilState } from 'recoil';

import { getNotificationList, editNotification } from 'src/lib/api';
import { notificationKeys } from 'src/lib/utils/queryKeys';
import { isMySidebarOpen } from 'src/lib/store';
import { INotification } from 'src/interfaces';

export const useNotificationList = () => {
  const { ref: listEndRef, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView]);

  const fetchList = ({ pageParam = undefined }) => getNotificationList({ cursor: pageParam });

  const getNextPageParam = (lastPage: INotification[]) => lastPage[lastPage.length - 1]?.id;

  const { data, isLoading, error, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery(
    notificationKeys.lists(),
    fetchList,
    {
      getNextPageParam,
    },
  );

  return { data, isLoading, error, fetchNextPage, hasNextPage, isFetchingNextPage, listEndRef };
};

export const useNotificationEdit = ({ id }: Pick<INotification, 'id'>) => {
  const setIsOpen = useSetRecoilState(isMySidebarOpen);

  const handleCardClick = async () => {
    await editNotification({ id, isRead: true });
    setIsOpen(false);
  };

  return { onClick: handleCardClick };
};
