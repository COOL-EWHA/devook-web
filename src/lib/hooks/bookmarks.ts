import { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import produce from 'immer';

import { bookmarkKeys, postKeys } from 'src/lib/utils/queryKeys';
import { addBookmark, createBookmark, deleteBookmark, getBookmark, editBookmarkMemo } from 'src/lib/api';
import { BookmarkCreateParams } from 'src/types';
import { useLoginStatus } from '.';
import { IPost } from 'src/interfaces';

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

  const postDetailKey = postKeys.detail(postId);
  const postListsKey = postKeys.lists();

  const updatePost = (old: IPost, action: 'commit' | 'rollback' = 'commit') =>
    produce(old, (post) => {
      if (post) {
        // eslint-disable-next-line no-param-reassign
        post.isBookmarked = action === 'commit';
      }
    });

  const updatePostList = (oldList: IPost[], action: 'commit' | 'rollback' = 'commit') =>
    produce(oldList, (posts) => {
      const updatedPost = posts.find((post) => post.id === postId);
      if (updatedPost) {
        updatedPost.isBookmarked = action === 'commit';
      }
    });

  const { mutate } = useMutation(mutationFn, {
    onMutate: async () => {
      await queryClient.cancelQueries(postDetailKey);
      await queryClient.cancelQueries(postListsKey);
      queryClient.setQueryData(postDetailKey, (old) => updatePost(old as IPost));
      queryClient.setQueriesData(postListsKey, (oldList) => updatePostList(oldList as IPost[]));
    },
    onError: () => {
      queryClient.setQueryData(postDetailKey, (old) => updatePost(old as IPost, 'rollback'));
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
