import { useEffect, useState } from 'react';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { useInfiniteQuery, useMutation, useQueryClient } from 'react-query';
import { useInView } from 'react-intersection-observer';

import { bookmarkKeys } from 'src/lib/utils/queryKeys';
import { bookmarkListFilter } from 'src/lib/store/bookmarks';
import { createBookmark, deleteBookmark, getBookmarkList } from 'src/lib/api';
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
    mutationKey: bookmarkKeys.create(),
    onSuccess: () => {
      queryClient.invalidateQueries(bookmarkKeys.all);
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

