export const NAV_ITEMS = [
  {
    iconType: 'bookmarks',
    label: '북마크 목록',
    to: '/',
  },
  {
    iconType: 'event_available',
    label: '읽기 관리',
    to: '/to-read',
  },
  {
    iconType: 'feed',
    label: '추천 글 목록',
    to: '/further-read',
  },
];

export const SUB_ROUTES = [
  { pathname: '/bookmarks', title: '북마크 상세' },
  { pathname: '/posts', title: '글 상세' },
];
