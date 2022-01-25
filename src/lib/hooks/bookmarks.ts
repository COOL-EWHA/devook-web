import { useCallback, useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';
import { useInfiniteQuery, useMutation, useQuery, useQueryClient } from 'react-query';
import { useInView } from 'react-intersection-observer';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import debounce from 'lodash/debounce';

import { bookmarkKeys, postKeys } from 'src/lib/utils/queryKeys';
import { bookmarkListFilter } from 'src/lib/store/bookmarks';
import {
  addBookmark,
  createBookmark,
  deleteBookmark,
  getBookmarkList,
  getBookmark,
  editBookmarkMemo,
  getBookmarkTagList,
} from 'src/lib/api';
import { BookmarkCreateParams, BookmarkPreview } from 'src/types';
import { useLoginStatus } from '.';
import { BOOKMARK_FETCH_LIMIT } from 'src/constant';

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

export const useBookmarkAdd = (postId: number) => {
  const queryClient = useQueryClient();
  const { checkIsLoggedIn } = useLoginStatus();

  const mutationFn = (postId: number) => addBookmark({ postId });

  const { mutate } = useMutation(mutationFn, {
    onSuccess: () => {
      queryClient.invalidateQueries(postKeys.lists());
    },
    onError: () => {
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

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setMemo(value);
  };

  const handleSubmit = () => {
    if (!checkIsLoggedIn()) {
      return;
    }
    mutate(Number(id));
  };

  return { openModal, isModalOpen, setIsModalOpen, memo, onChange: handleChange, onSubmit: handleSubmit };
};

export const useBookmark = () => {
  const params = useParams();
  const bookmarkId = params.id ?? '';

  const queryFn = () => getBookmark(Number(bookmarkId));
  const { data, isLoading } = useQuery(bookmarkKeys.detail(Number(bookmarkId)), queryFn);

  return { id: Number(bookmarkId), data, isLoading };
};

export const useBookmarkTagList = () => {
  const queryFn = () => getBookmarkTagList();
  const { data } = useQuery(bookmarkKeys.tags(), queryFn);
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

export const useBookmarkTagFilter = (text: string) => {
  const [filter, setFilter] = useRecoilState(bookmarkListFilter);
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

export const useBookmarkSearch = () => {
  const [filter, setFilter] = useRecoilState(bookmarkListFilter);
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
