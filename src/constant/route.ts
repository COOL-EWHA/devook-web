export const NAV_ITEMS = [
  {
    iconType: 'favorite',
    label: '추천 글 목록',
    to: '/',
  },
  {
    iconType: 'bookmarks',
    label: '북마크 목록',
    to: '/bookmarks',
  },
  {
    iconType: 'event_available',
    label: '읽기 관리',
    to: '/to-read',
  },
];

export const SUB_ROUTES = [{ pathname: /\/bookmarks\/[0-9]+/, title: '북마크 상세' }];
