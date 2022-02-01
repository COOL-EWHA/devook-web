import { useCallback, useEffect, useState } from 'react';
import { useInfiniteQuery, useQuery } from 'react-query';
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';
import { useInView } from 'react-intersection-observer';
import debounce from 'lodash/debounce';

import { getRelatedPostList, getBookmarkList, getPostList, getPostTagList, getBookmarkTagList } from 'src/lib/api';
import { bookmarkKeys, postKeys } from 'src/lib/utils/queryKeys';
import { bookmarkListFilter, postListFilter } from 'src/lib/store';
import { PostPreview, PostType } from 'src/types';
import { POST_LIST_FETCH_LIMIT, RELATED_POST_FETCH_LIMIT, NO_REFETCH } from 'src/constant';

export const useRelatedPostList = (bookmarkId: number) => {
  const filter = {
    bookmarkId,
    limit: RELATED_POST_FETCH_LIMIT,
  };

  const queryFn = () => getRelatedPostList(filter);
  const { data, isLoading } = useQuery(postKeys.list(filter), queryFn, NO_REFETCH);

  return { data, isLoading };
};

export const usePostList = (type: PostType = 'post') => {
  const [queryKeys, getList, listFilter] =
    type === 'bookmark' ? [bookmarkKeys, getBookmarkList, bookmarkListFilter] : [postKeys, getPostList, postListFilter];
  const filter = useRecoilValue(listFilter);
  const resetFilter = useResetRecoilState(listFilter);
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

  const fetchList = ({ pageParam = undefined }) => getList({ cursor: pageParam, ...filter });

  const getNextPageParam = (lastPage?: PostPreview[]) => {
    if (!lastPage || lastPage.length < POST_LIST_FETCH_LIMIT) {
      return undefined;
    }
    const lastItemId = lastPage[lastPage.length - 1]?.id;
    return lastItemId;
  };

  const { data, isLoading, error, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery(
    queryKeys.list(filter),
    fetchList,
    {
      getNextPageParam,
    },
  );

  return { data, isLoading, error, fetchNextPage, hasNextPage, isFetchingNextPage, listEndRef };
};

export const usePostSearch = (type: PostType = 'post') => {
  const listFilter = type === 'bookmark' ? bookmarkListFilter : postListFilter;
  const [filter, setFilter] = useRecoilState(listFilter);
  const [query, setQuery] = useState('');

  const search = useCallback(
    debounce((query) => {
      setFilter({ ...filter, q: query });
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

export const usePostTagList = (type: PostType = 'post') => {
  const [queryKeys, queryFn] = type === 'bookmark' ? [bookmarkKeys, getBookmarkTagList] : [postKeys, getPostTagList];
  const { data } = useQuery(queryKeys.tags(), queryFn);

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

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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
