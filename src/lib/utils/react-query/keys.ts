export const bookmarkKeys = {
  all: ['bookmarks'] as const,
  lists: () => [...bookmarkKeys.all, 'list'] as const,
  list: (filters: object) => [...bookmarkKeys.lists(), filters] as const,
  tags: () => [...bookmarkKeys.all, 'tags'] as const,
  details: () => [...bookmarkKeys.all, 'detail'] as const,
  detail: (id: number) => [...bookmarkKeys.details(), id] as const,
};

export const postKeys = {
  all: ['posts'] as const,
  lists: () => [...postKeys.all, 'list'] as const,
  list: (filters: object) => [...postKeys.lists(), filters] as const,
  tags: () => [...postKeys.all, 'tags'] as const,
  details: () => [...postKeys.all, 'detail'] as const,
  detail: (id: number) => [...postKeys.details(), id] as const,
};

export const notificationKeys = {
  all: ['notifications'] as const,
  lists: () => [...notificationKeys.all, 'list'] as const,
};
