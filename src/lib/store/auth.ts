import { atom, selector } from 'recoil';

export const isAuthLoading = atom<boolean>({ key: 'isAuthLoading', default: true });
export const accessToken = atom<string>({ key: 'accessToken', default: '' });
export const isUserLoggedIn = selector({
  key: 'isUserLoggedIn',
  get: ({ get }) => !!get(accessToken),
});
