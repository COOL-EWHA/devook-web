import { useCallback, useEffect, useState } from 'react';
import { useInfiniteQuery, useQuery } from 'react-query';
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';
import { useInView } from 'react-intersection-observer';
import debounce from 'lodash/debounce';

import { getRelatedPostList, getRecommendedPostList, getRecommendedPostTagList } from 'src/lib/api';
import { postKeys } from 'src/lib/utils/queryKeys';
import { bookmarkListFilter, postListFilter } from 'src/lib/store';
import { PostPreview } from 'src/types';
import { RECOMMENDED_POST_FETCH_LIMIT, RELATED_POST_FETCH_LIMIT, NO_REFETCH } from 'src/constant';

export const useRelatedPostList = (bookmarkId: number) => {
  const filter = {
    bookmarkId,
    limit: RELATED_POST_FETCH_LIMIT,
  };

  const queryFn = () => getRelatedPostList(filter);
  const { data, isLoading } = useQuery(postKeys.list(filter), queryFn, NO_REFETCH);

  return { data, isLoading };
};

export const useRecommendedPostList = () => {
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

  const fetchRecommendedPostList = ({ pageParam = undefined }) =>
    getRecommendedPostList({ cursor: pageParam, ...filter });

  const getNextPageParam = (lastPage?: PostPreview[]) => {
    if (!lastPage || lastPage.length < RECOMMENDED_POST_FETCH_LIMIT) {
      return undefined;
    }
    const lastBookmarkId = lastPage[lastPage.length - 1]?.id;
    return lastBookmarkId;
  };

  const { data, isLoading, error, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery(
    postKeys.list(filter),
    fetchRecommendedPostList,
    {
      getNextPageParam,
    },
  );

  return { data, isLoading, error, fetchNextPage, hasNextPage, isFetchingNextPage, listEndRef };
};

export const useRecommendedPostSearch = () => {
  const [filter, setFilter] = useRecoilState(postListFilter);
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

export const useRecommendedPostTagList = () => {
  const queryFn = () => getRecommendedPostTagList();
  const { data } = useQuery(postKeys.tags(), queryFn);
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

  return { data, isModalOpen, setIsModalOpen, openModal, closeModal };
};

export const useTagFilter = (text: string, type: 'bookmark' | 'post') => {
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
