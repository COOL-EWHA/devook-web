import { atom } from 'recoil';

export const isUserLoggedIn = atom<boolean>({ key: 'isUserLoggedIn', default: false });
