import { useCallback, useEffect, useState } from 'react';
import { useInfiniteQuery, useQuery } from 'react-query';
import { useRecoilState, useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil';
import { useInView } from 'react-intersection-observer';
import debounce from 'lodash/debounce';

import { getRelatedPostList, getPostTagList, getBookmarkTagList } from 'src/lib/api';
import { bookmarkKeys, postKeys, getFetchPostList, getNextPageParam } from 'src/lib/utils';
import { bookmarkListFilter, postListFilter, isAuthLoading, isUserLoggedIn } from 'src/lib/store';
import { PostType } from 'src/types';
import { RELATED_POST_FETCH_LIMIT } from 'src/constant';

export const useRelatedPostList = (bookmarkId: number) => {
  const filter = {
    bookmarkId,
    limit: RELATED_POST_FETCH_LIMIT,
  };

  const queryFn = () => getRelatedPostList(filter);
  const { data, isLoading } = useQuery(postKeys.list(filter), queryFn);

  return { data, isLoading };
};

export const usePostList = () => {
  const isAuthLoadingValue = useRecoilValue(isAuthLoading);
  const filter = useRecoilValue(postListFilter);
  const resetFilter = useResetRecoilState(postListFilter);
  const { ref: listEndRef, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    return resetFilter;
  }, []);

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView]);

  const { data, isLoading, error, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery(
    postKeys.list(filter),
    getFetchPostList(filter),
    {
      getNextPageParam,
      enabled: !isAuthLoadingValue,
      staleTime: 1000,
    },
  );

  const [noResultIconType, noResultTarget] = filter.q === '' ? ['favorite', '추천 글이'] : ['favorite', `검색 결과가`];

  return {
    data,
    isLoading,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    listEndRef,
    noResultIconType,
    noResultTarget,
  };
};

export const usePostSearch = (type: PostType = 'post') => {
  const listFilter = type === 'bookmark' ? bookmarkListFilter : postListFilter;
  const setFilter = useSetRecoilState(listFilter);
  const [query, setQuery] = useState('');

  const search = useCallback(
    debounce((query) => {
      setFilter((filter) => ({ ...filter, q: query }));
    }, 500),
    [],
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setQuery(value);
    search(value);
  };

  return { query, handleChange };
};

export const usePostTagList = ({
  postType = 'post',
  isBookmarkRead,
}: {
  postType?: PostType;
  isBookmarkRead?: boolean;
}) => {
  const isLoggedIn = useRecoilValue(isUserLoggedIn);
  const isAuthLoadingValue = useRecoilValue(isAuthLoading);

  const [queryKeys, queryFn] =
    postType === 'bookmark' ? [bookmarkKeys, () => getBookmarkTagList({ isBookmarkRead })] : [postKeys, getPostTagList];
  const { data } = useQuery(queryKeys.tags(), queryFn, {
    enabled: isLoggedIn || (!isAuthLoadingValue && postType === 'post'),
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (isModalOpen && window.innerWidth > 1024) {
        closeModal();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isModalOpen]);

  const openModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  return { data, isModalOpen, openModal, closeModal };
};

export const usePostTagFilter = (text: string, type: PostType = 'post') => {
  const [filter, setFilter] = useRecoilState(type === 'bookmark' ? bookmarkListFilter : postListFilter);
  const { tags } = filter;
  const isSelected = tags?.includes(text) || false;

  const toggleSelect = () => {
    setFilter({ ...filter, tags: isSelected ? tags?.filter((tag) => tag !== text) : tags?.concat(text) });
  };

  return {
    isSelected,
    toggleSelect,
  };
};
