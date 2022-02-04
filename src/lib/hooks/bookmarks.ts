import { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';
import { InfiniteData, useInfiniteQuery, useMutation, useQuery, useQueryClient } from 'react-query';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import produce from 'immer';
import { useInView } from 'react-intersection-observer';

import { bookmarkKeys, postKeys } from 'src/lib/utils/queryKeys';
import { addBookmark, createBookmark, deleteBookmark, getBookmark, editBookmark, getBookmarkList } from 'src/lib/api';
import { BookmarkCreateParams, BookmarkPreview } from 'src/types';
import { useLoginStatus } from '.';
import { IBookmark, IPost } from 'src/interfaces';
import { bookmarkListFilter } from 'src/lib/store';
import { NO_REFETCH, POST_LIST_FETCH_LIMIT } from 'src/constant';

export const useBookmarkList = ({ isRead }: Partial<Pick<IBookmark, 'isRead'>>) => {
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

  const fetchList = ({ pageParam = undefined }) => getBookmarkList({ cursor: pageParam, ...filter });

  const getNextPageParam = (lastPage?: BookmarkPreview[]) => {
    if (!lastPage || lastPage.length < POST_LIST_FETCH_LIMIT) {
      return undefined;
    }
    const lastItemId = lastPage[lastPage.length - 1]?.id;
    return lastItemId;
  };

  const { data, isLoading, error, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery(
    bookmarkKeys.list(filter),
    fetchList,
    {
      getNextPageParam,
      ...NO_REFETCH,
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

  const closeModal = () => {
    setIsModalOpen(false);
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
    if (!checkIsLoggedIn()) {
      setIsModalOpen(false);
      return;
    }
    if (!checkIsFormValid()) {
      return;
    }
    mutate(form);
  };

  return { openModal, closeModal, isModalOpen, form, onChange: handleFormChange, onSubmit: handleSubmit };
};

export const useBookmarkAdd = (postId: number) => {
  const queryClient = useQueryClient();
  const { checkIsLoggedIn } = useLoginStatus();

  const mutationFn = (postId: number) => addBookmark({ postId });

  const postListsKey = postKeys.lists();

  const updatePostList = (oldList: IPost[], action: 'commit' | 'rollback' = 'commit') =>
    produce(oldList, (posts) => {
      const updatedPost = posts.find((post) => post.id === postId);
      if (updatedPost) {
        updatedPost.isBookmarked = action === 'commit';
      }
    });

  const { mutate } = useMutation(mutationFn, {
    onMutate: async () => {
      await queryClient.cancelQueries(postListsKey);
      queryClient.setQueriesData(postListsKey, (oldList) => updatePostList(oldList as IPost[]));
    },
    onError: () => {
      queryClient.setQueriesData(postListsKey, (oldList) => updatePostList(oldList as IPost[], 'rollback'));
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

export const useBookmarkIsReadEdit = ({ id, isRead }: Partial<Pick<IBookmark, 'id' | 'isRead'>>) => {
  const queryClient = useQueryClient();
  const filter = useRecoilValue(bookmarkListFilter);

  const mutationFn = (id: number) => editBookmark({ id, isRead: !isRead });

  const updateBookmarkList = (oldList: InfiniteData<BookmarkPreview[]>) =>
    produce(oldList, ({ pages }) => {
      let updatedBookmark;
      for (let i = 0; i < pages.length; i += 1) {
        const bookmark = pages[i].find((bookmark) => bookmark.id === id);
        if (bookmark) {
          updatedBookmark = bookmark;
          break;
        }
      }
      if (updatedBookmark) {
        updatedBookmark.isRead = !updatedBookmark.isRead;
      }
    });

  const { mutate } = useMutation(mutationFn, {
    onMutate: async () => {
      await queryClient.cancelQueries(bookmarkKeys.list(filter));
      queryClient.setQueriesData(bookmarkKeys.list(filter), (oldList) =>
        updateBookmarkList(oldList as InfiniteData<BookmarkPreview[]>),
      );
    },
    onError: () => {
      queryClient.setQueriesData(bookmarkKeys.list(filter), (oldList) =>
        updateBookmarkList(oldList as InfiniteData<BookmarkPreview[]>),
      );

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

export const useBookmarkMemoEdit = ({ originalMemo }: { originalMemo?: string }) => {
  const params = useParams();
  const id = params.id ?? '';

  const queryClient = useQueryClient();
  const { checkIsLoggedIn } = useLoginStatus();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [memo, setMemo] = useState(originalMemo);

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

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
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

  return { openModal, closeModal, isModalOpen, memo, onChange: handleChange, onSubmit: handleSubmit };
};

export const useBookmark = () => {
  const params = useParams();
  const bookmarkId = params.id ?? '';

  const queryFn = () => getBookmark(Number(bookmarkId));
  const { data, isLoading } = useQuery(bookmarkKeys.detail(Number(bookmarkId)), queryFn);

  return { id: Number(bookmarkId), data, isLoading };
};
