import { useEffect, useMemo } from 'react';
import { useInView } from 'react-intersection-observer';
import { useInfiniteQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import { getNotificationList, editNotificationIsRead } from 'src/lib/api';
import { notificationKeys } from 'src/lib/utils/queryKeys';
import { isMySidebarOpen } from 'src/lib/store';
import { NOTIFICATION_ROUTES, POST_LIST_FETCH_LIMIT } from 'src/constant';
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

  const getNextPageParam = (lastPage?: INotification[]) => {
    if (!lastPage || lastPage.length < POST_LIST_FETCH_LIMIT) {
      return undefined;
    }
    const lastItemId = lastPage[lastPage.length - 1]?.id;
    return lastItemId;
  };

  const { data, isLoading, error, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery(
    notificationKeys.lists(),
    fetchList,
    {
      getNextPageParam,
    },
  );

  return { data, isLoading, error, fetchNextPage, hasNextPage, isFetchingNextPage, listEndRef };
};

export const useNotificationCard = ({
  id,
  message,
  createdAt,
  bookmarkId,
}: Pick<INotification, 'id' | 'message' | 'createdAt' | 'bookmarkId'>) => {
  const navigate = useNavigate();
  const setIsOpen = useSetRecoilState(isMySidebarOpen);

  const handleRoute = () => {
    if (bookmarkId) {
      navigate(`/bookmarks/${bookmarkId}`);
    } else {
      NOTIFICATION_ROUTES.forEach((notification) => {
        if (notification.message.substring(0, 2) === message.substring(0, 2)) {
          navigate(notification.to);
        }
      });
    }
  };

  const handleClickNotificationCard = async () => {
    await editNotificationIsRead({ id, isRead: true });
    handleRoute();
    setIsOpen(false);
  };

  const getPassedDate = () => {
    const calculatedPassedDate = Math.floor(
      Math.floor(new Date().getTime() - new Date(createdAt).getTime()) / 1000 / 60 / 60 / 24,
    );
    return calculatedPassedDate;
  };

  const passedDate = useMemo(() => getPassedDate(), [createdAt]);

  return { onClick: handleClickNotificationCard, passedDate };
};
