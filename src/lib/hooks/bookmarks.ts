import { useEffect, useState } from 'react';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { useInfiniteQuery, useMutation, useQuery, useQueryClient } from 'react-query';
import { useInView } from 'react-intersection-observer';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import { bookmarkKeys } from 'src/lib/utils/queryKeys';
import { bookmarkListFilter } from 'src/lib/store/bookmarks';
import { createBookmark, deleteBookmark, getBookmarkList, getBookmarkDetail, editBookmarkMemo } from 'src/lib/api';
import { BookmarkCreateParams, BookmarkPreview } from 'src/types';
import { useLoginStatus } from '.';

const BOOKMARK_FETCH_LIMIT = 10;

export const useBookmarkList = () => {
  const filter = useRecoilValue(bookmarkListFilter);
  const resetFilter = useResetRecoilState(bookmarkListFilter);
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

  const fetchBookmarkList = ({ pageParam = undefined }) => getBookmarkList({ cursor: pageParam, ...filter });

  const getNextPageParam = (lastPage?: BookmarkPreview[]) => {
    if (!lastPage || lastPage.length < BOOKMARK_FETCH_LIMIT) {
      return undefined;
    }
    const lastBookmarkId = lastPage[lastPage.length - 1]?.id;
    return lastBookmarkId;
  };

  const { data, isLoading, error, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery(
    bookmarkKeys.list(filter),
    fetchBookmarkList,
    {
      getNextPageParam,
    },
  );

  return { data, isLoading, error, fetchNextPage, hasNextPage, isFetchingNextPage, listEndRef };
};

export const useBookmarkCreate = () => {
  const queryClient = useQueryClient();
  const { checkIsLoggedIn } = useLoginStatus();
  const initialData = { url: '', memo: '' };
  const [form, setForm] = useState<BookmarkCreateParams>(initialData);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const mutationFn = (data: BookmarkCreateParams) => createBookmark(data);

  const { mutate } = useMutation(mutationFn, {
    onSuccess: () => {
      queryClient.invalidateQueries(bookmarkKeys.lists());
      setForm(initialData);
      setIsModalOpen(false);
    },
    onError: () => {
      alert('북마크 생성에 실패하였습니다.');
      setForm(initialData);
    },
  });

  const openModal = () => {
    setIsModalOpen(true);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const checkIsFormValid = () => {
    if (!form.url) {
      alert('링크를 입력해주세요!');
      return false;
    }
    return true;
  };

  const handleSubmit = () => {
    if (!checkIsLoggedIn() || !checkIsFormValid()) {
      return;
    }
    mutate(form);
  };

  return { openModal, isModalOpen, setIsModalOpen, form, onChange: handleFormChange, onSubmit: handleSubmit };
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
      if (pathname.includes('/bookmarks')) {
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

export const useBookmarkMemoEdit = ({ originalMemo }: { originalMemo?: string }) => {
  const params = useParams();
  const id = params.id ?? '';

  const queryClient = useQueryClient();
  const { checkIsLoggedIn } = useLoginStatus();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [memo, setMemo] = useState(originalMemo);

  const mutationFn = (id: number) => editBookmarkMemo({ id, memo });

  const { mutate } = useMutation(mutationFn, {
    onSuccess: () => {
      queryClient.invalidateQueries(bookmarkKeys.detail(Number(id)));
      setIsModalOpen(false);
    },
    onError: () => {
      alert('북마크 메모 수정에 실패하였습니다.');
    },
  });

  const openModal = () => {
    setIsModalOpen(true);
  };

  const handleMemoChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setMemo(value);
  };

  const handleSubmit = () => {
    if (!checkIsLoggedIn()) {
      return;
    }
    mutate(Number(id));
  };

  return { openModal, isModalOpen, setIsModalOpen, memo, onChange: handleMemoChange, onSubmit: handleSubmit };
};

export const useBookmarkDetail = () => {
  const params = useParams();
  const bookmarkId = params.id ?? '';

  const queryFn = () => getBookmarkDetail(Number(bookmarkId));
  const { data, isLoading } = useQuery(bookmarkKeys.detail(Number(bookmarkId)), queryFn);

  return { bookmarkId, data, isLoading };
};
