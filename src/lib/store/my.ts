import { atom } from 'recoil';

export const isMySidebarOpen = atom<boolean>({ key: 'isSidebarOpen', default: false });
