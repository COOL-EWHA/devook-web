import { atom } from 'recoil';

export const isAuthLoading = atom<boolean>({ key: 'isAuthLoading', default: true });
export const accessToken = atom<string>({ key: 'accessToken', default: '' });
export const isUserLoggedIn = atom<boolean>({ key: 'isUserLoggedIn', default: false });
