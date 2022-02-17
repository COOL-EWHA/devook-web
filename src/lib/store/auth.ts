import { atom } from 'recoil';

export const isAuthRefreshLoading = atom<boolean>({ key: 'isAuthRefreshLoading', default: true });
export const isUserLoggedIn = atom<boolean>({ key: 'isUserLoggedIn', default: false });
