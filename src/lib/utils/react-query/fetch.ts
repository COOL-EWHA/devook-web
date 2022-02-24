import { getPostList, getBookmarkList, getNotificationList } from 'src/lib/api';
import { BookmarkListFilter, PostListFilter } from 'src/types';

export const getFetchPostList =
  (filter: PostListFilter) =>
  ({ pageParam = undefined }) =>
    getPostList({ cursor: pageParam, ...filter });

export const getFetchBookmarkList =
  (filter: BookmarkListFilter) =>
  ({ pageParam = undefined }) =>
    getBookmarkList({ cursor: pageParam, ...filter });

export const fetchNotificationList = ({ pageParam = undefined }) => getNotificationList({ cursor: pageParam });

export const getNextPageParam = <List extends { id: number }[]>(lastPage: List) => lastPage[lastPage.length - 1]?.id;
