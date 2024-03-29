import { useCallback, useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';
import { InfiniteData, useInfiniteQuery, useMutation, useQuery, useQueryClient } from 'react-query';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import cloneDeep from 'lodash/cloneDeep';
import dayjs from 'dayjs';
import { useInView } from 'react-intersection-observer';

import { bookmarkKeys, postKeys, getFetchBookmarkList, getNextPageParam } from 'src/lib/utils';
import { addBookmark, createBookmark, deleteBookmark, getBookmark, editBookmark } from 'src/lib/api';
import { BookmarkCreateParams, BookmarkPreview, PostPreview } from 'src/types';
import { useLoginStatus } from '.';
import { IBookmark } from 'src/interfaces';
import { bookmarkListFilter, isAuthLoading, isUserLoggedIn, postListFilter } from 'src/lib/store';
import { RELATED_POST_FETCH_LIMIT } from 'src/constant';

export const useBookmarkList = ({ isRead }: Partial<Pick<IBookmark, 'isRead'>>) => {
  const isAuthLoadingValue = useRecoilValue(isAuthLoading);
  const isLoggedIn = useRecoilValue(isUserLoggedIn);
  const [filter, setFilter] = useRecoilState(bookmarkListFilter);
  const resetFilter = useResetRecoilState(bookmarkListFilter);
  const { ref: listEndRef, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    return resetFilter;
  }, []);

  useEffect(() => {
    if (typeof isRead === 'boolean') {
      setFilter({ ...filter, isRead });
    }
  }, [isRead]);

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView]);

  const { data, isLoading, error, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery(
    bookmarkKeys.list(filter),
    getFetchBookmarkList(filter),
    {
      getNextPageParam,
      enabled: !isAuthLoadingValue && isLoggedIn,
      staleTime: 1000,
    },
  );

  const noResultIconType = isRead === undefined ? 'bookmark' : 'event_available';
  const noResultTarget = filter.q ? '검색 결과가' : `${isRead === undefined ? '' : '읽지 않은 '}북마크가`;

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

export const useBookmarkCreate = () => {
  const queryClient = useQueryClient();
  const filter = useRecoilValue(bookmarkListFilter);
  const { checkIsLoggedIn } = useLoginStatus();
  const initialFormData = { url: '', memo: '' };
  const [form, setForm] = useState<BookmarkCreateParams>({ url: '', memo: '' });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isSubmitDisabled = !form.url;
  const mutationFn = (data: BookmarkCreateParams) => createBookmark(data);

  const bookmarkListKey = bookmarkKeys.list(filter);

  const updateBookmarkList = (prevList: InfiniteData<BookmarkPreview[]>, newBookmark: BookmarkPreview) => {
    const newList = cloneDeep(prevList);
    const { pages } = newList;
    pages[0].unshift(newBookmark);
    return newList;
  };

  const { mutate } = useMutation(mutationFn, {
    onSuccess: (data) => {
      const prevList = queryClient.getQueryData<InfiniteData<BookmarkPreview[]>>(bookmarkListKey);
      if (prevList) {
        queryClient.setQueryData<InfiniteData<BookmarkPreview[]>>(bookmarkListKey, () =>
          updateBookmarkList(prevList, data),
        );
      }
      setForm(initialFormData);
      setIsModalOpen(false);
    },
    onError: () => {
      alert('북마크 생성에 실패하였습니다.');
    },
  });

  const openModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const handleFormChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((form) => ({ ...form, [name]: value }));
  }, []);

  const handleSubmit = () => {
    if (!checkIsLoggedIn()) {
      setIsModalOpen(false);
      return;
    }
    mutate(form);
  };

  return {
    openModal,
    closeModal,
    isModalOpen,
    form,
    onChange: handleFormChange,
    onSubmit: handleSubmit,
    isSubmitDisabled,
  };
};

export const useBookmarkAdd = (postId: number) => {
  const queryClient = useQueryClient();
  const { checkIsLoggedIn } = useLoginStatus();
  const { pathname } = useLocation();
  const params = useParams();
  const postListFilterValue = useRecoilValue(postListFilter);
  const listType = pathname === '/' ? 'postList' : 'relatedPostList';
  const filter =
    listType === 'postList' ? postListFilterValue : { bookmarkId: Number(params?.id), limit: RELATED_POST_FETCH_LIMIT };

  const mutationFn = (postId: number) => addBookmark({ postId });

  const postListKey = postKeys.list(filter);

  const updatePostList = (prevList: InfiniteData<PostPreview[]>) => {
    const newList = cloneDeep(prevList);
    const { pages } = newList;
    for (let i = 0; i < pages.length; i += 1) {
      const post = pages[i].find((post) => post.value === postId);
      if (post) {
        post.isBookmarked = true;
        break;
      }
    }
    return newList;
  };

  const updateRelatedPostList = (prevList: PostPreview[]) => {
    const newList = cloneDeep(prevList);
    const post = newList.find((post) => post.value === postId);
    if (post) {
      post.isBookmarked = true;
    }
    return newList;
  };

  const { mutate } = useMutation(mutationFn, {
    onMutate: async () => {
      await queryClient.cancelQueries(postListKey);
      const prevList = queryClient.getQueryData<InfiniteData<PostPreview[]> | PostPreview[]>(postListKey);
      if (prevList && listType === 'postList') {
        queryClient.setQueryData(postListKey, () => updatePostList(prevList as InfiniteData<PostPreview[]>));
      }
      if (prevList && listType === 'relatedPostList') {
        queryClient.setQueryData(postListKey, () => updateRelatedPostList(prevList as PostPreview[]));
      }
      return { prevList };
    },
    onError: (error, variables, context) => {
      queryClient.setQueryData(postListKey, context?.prevList);
      alert('북마크 추가에 실패하였습니다.');
    },
  });

  const handleAdd = () => {
    if (!checkIsLoggedIn()) {
      return;
    }
    mutate(postId);
  };

  return { onAdd: handleAdd };
};

export const useBookmarkDelete = (id: number) => {
  const queryClient = useQueryClient();
  const { checkIsLoggedIn } = useLoginStatus();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const mutationFn = (id: number) => deleteBookmark(id);

  const { mutate } = useMutation(mutationFn, {
    onSuccess: () => {
      queryClient.invalidateQueries(bookmarkKeys.lists());
      if (pathname.match(/^\/bookmarks\/[0-9]+/)) {
        navigate(-1);
      }
    },
  });

  const handleDelete = () => {
    if (!checkIsLoggedIn()) {
      return;
    }
    // eslint-disable-next-line no-restricted-globals
    if (confirm('해당 북마크를 삭제하시겠습니까?')) {
      mutate(id);
    }
  };

  return { onDelete: handleDelete };
};

export const useBookmarkIsReadEdit = ({ id, isRead }: Partial<Pick<IBookmark, 'id' | 'isRead'>>) => {
  const queryClient = useQueryClient();
  const filter = useRecoilValue(bookmarkListFilter);

  const mutationFn = (id: number) => editBookmark({ id, isRead: !isRead });

  const bookmarkListKey = bookmarkKeys.list(filter);

  const updateBookmarkList = (prevList: InfiniteData<BookmarkPreview[]>) => {
    const newList = cloneDeep(prevList);
    const { pages } = newList;
    for (let i = 0; i < pages.length; i += 1) {
      const bookmark = pages[i].find((bookmark) => bookmark.id === id);
      if (bookmark) {
        bookmark.isRead = !bookmark.isRead;
        break;
      }
    }
    return newList;
  };

  const { mutate } = useMutation(mutationFn, {
    onMutate: async () => {
      await queryClient.cancelQueries(bookmarkListKey);
      const prevList = queryClient.getQueryData<InfiniteData<BookmarkPreview[]>>(bookmarkListKey);
      if (prevList) {
        queryClient.setQueryData(bookmarkListKey, () => updateBookmarkList(prevList));
      }
      return { prevList };
    },
    onError: (error, variables, context) => {
      queryClient.setQueryData(bookmarkListKey, context?.prevList);
      alert('북마크 읽기 완료 수정에 실패하였습니다.');
    },
  });

  const toggle = () => {
    if (id) {
      mutate(id);
    }
  };

  return { toggle };
};

export const useBookmarkMemoEdit = ({ id, memo: prevMemo }: Pick<IBookmark, 'id' | 'memo'>) => {
  const queryClient = useQueryClient();
  const { checkIsLoggedIn } = useLoginStatus();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [memo, setMemo] = useState(prevMemo);
  const isSubmitDisabled = memo === prevMemo;

  const mutationFn = (id: number) => editBookmark({ id, memo });

  const { mutate } = useMutation(mutationFn, {
    onSuccess: () => {
      queryClient.invalidateQueries(bookmarkKeys.detail(Number(id)));
      setIsModalOpen(false);
    },
    onError: () => {
      alert('북마크 메모 수정에 실패하였습니다.');
    },
  });

  const openModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setMemo(value);
  }, []);

  const handleSubmit = () => {
    if (!checkIsLoggedIn()) {
      return;
    }
    mutate(Number(id));
  };

  return {
    openModal,
    closeModal,
    isModalOpen,
    memo,
    onChange: handleChange,
    onSubmit: handleSubmit,
    isSubmitDisabled,
  };
};

export const useBookmark = () => {
  const params = useParams();
  const bookmarkId = Number(params?.id);
  const isAuthLoadingValue = useRecoilValue(isAuthLoading);
  const isLoggedIn = useRecoilValue(isUserLoggedIn);

  const queryFn = () => getBookmark(bookmarkId);
  const { data, isLoading } = useQuery(bookmarkKeys.detail(bookmarkId), queryFn, {
    enabled: !isAuthLoadingValue && isLoggedIn,
  });

  return { id: bookmarkId, data, isLoading };
};

export const useBookmarkDueDateSet = (id: number, prevDueDate: string | undefined) => {
  const { pathname } = useLocation();
  const queryClient = useQueryClient();
  const { checkIsLoggedIn } = useLoginStatus();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dueDate, setDueDate] = useState(prevDueDate ? new Date(prevDueDate) : null);
  const dueDateString = dueDate ? dayjs(dueDate).format('YYYY/MM/DD') : '';
  const mutationFn = (id: number) => editBookmark({ id, dueDate: dueDateString });
  const isSubmitDisabled = prevDueDate === dueDateString;

  const { mutate } = useMutation(mutationFn, {
    onSuccess: () => {
      if (pathname === '/bookmarks' || pathname === '/to-read') {
        queryClient.invalidateQueries(bookmarkKeys.lists());
      }
      if (pathname.match(/^\/bookmarks\/[0-9]+/)) {
        queryClient.invalidateQueries(bookmarkKeys.detail(id));
      }
      setIsModalOpen(false);
    },
    onError: () => {
      alert('북마크 읽기기한 설정에 실패하였습니다.');
    },
  });

  const openModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setDueDate(prevDueDate ? new Date(prevDueDate) : null);
  }, []);

  const handleChange = (date: Date | null) => {
    setDueDate(date);
  };

  const reset = useCallback(() => setDueDate(null), []);

  const checkFormValid = () => {
    if (!dueDate && !prevDueDate) {
      alert('읽기 기한을 설정해주세요.');
      return false;
    }
    if (dueDate && dayjs(dueDate).isBefore(dayjs().format('YYYY/MM/DD'))) {
      alert('과거 날짜는 읽기 기한으로 설정할 수 없습니다.');
      return false;
    }
    return true;
  };

  const handleSubmit = () => {
    if (!checkIsLoggedIn() || !checkFormValid()) {
      return;
    }
    mutate(id);
  };

  return {
    openModal,
    closeModal,
    isModalOpen,
    dueDate,
    onChange: handleChange,
    onSubmit: handleSubmit,
    reset,
    isSubmitDisabled,
  };
};
