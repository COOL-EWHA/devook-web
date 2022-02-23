import { useLocation, useNavigate } from 'react-router-dom';
import { useQueryClient } from 'react-query';

import { CACTUS_GREEN, GREY, SUB_ROUTES } from 'src/constant';

import { postKeys, bookmarkKeys, getFetchPostList, getFetchBookmarkList } from 'src/lib/utils';
import { useLoginStatus } from '.';
import { bookamrkListFilterDefaultValue, postListFilterDefaultValue } from 'src/lib/store';

export const useGNB = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { checkIsLoggedIn } = useLoginStatus();
  const queryClient = useQueryClient();
  const isSubRoute = !!SUB_ROUTES.find((subRoute) => subRoute.pathname.test(pathname));

  const handleNavigate = (to: string) => {
    if (to === '/' || checkIsLoggedIn()) {
      navigate(to);
    }
  };

  const getLabelColor = (to: string) => (pathname === to ? CACTUS_GREEN[500] : GREY[900]);

  const getQueryKey = (to: string) => {
    if (to === '/') {
      return postKeys.list(postListFilterDefaultValue);
    }
    if (to === '/bookmarks') {
      return bookmarkKeys.list(bookamrkListFilterDefaultValue);
    }
    return bookmarkKeys.list({ ...bookamrkListFilterDefaultValue, isRead: false });
  };

  const getFetchList = (to: string) => {
    if (to === '/') {
      return getFetchPostList(postListFilterDefaultValue);
    }
    if (to === '/bookmarks') {
      return getFetchBookmarkList(bookamrkListFilterDefaultValue);
    }
    return getFetchBookmarkList({ ...bookamrkListFilterDefaultValue, isRead: false });
  };

  const prefetchList = async (to: string) => {
    if (to === pathname) {
      return;
    }
    const fetchList = getFetchList(to);
    await queryClient.prefetchQuery(getQueryKey(to), fetchList);
  };

  return { isSubRoute, onNavigate: handleNavigate, getLabelColor, prefetchList };
};
