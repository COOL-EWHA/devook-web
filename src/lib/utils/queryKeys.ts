export const bookmarkKeys = {
  all: ['bookmarks'] as const,
  lists: () => [...bookmarkKeys.all, 'list'] as const,
  list: (filters: object) => [...bookmarkKeys.lists(), filters] as const,
  tags: () => [...bookmarkKeys.all, 'tags'] as const,
  details: () => [...bookmarkKeys.all, 'detail'] as const,
  detail: (id: number) => [...bookmarkKeys.details(), id] as const,
};
