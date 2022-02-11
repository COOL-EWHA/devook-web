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

export const NOTIFICATION_ROUTES = [
  {
    message: '등록된 북마크가 없어요. 북마크를 추가해보세요! 😎',
    to: '/bookmarks',
  },
  {
    message: '읽지 않은 북마크가 n개 있어요. 추가한 글을 읽어보세요! 🤩',
    to: '/to-read',
  },
];
