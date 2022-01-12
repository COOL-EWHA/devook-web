import { atom } from 'recoil';

export const accessToken = atom<string | undefined>({
  key: 'accessToken',
  default: undefined,
});

export const accessTokenLoading = atom<boolean>({
  key: 'accessTokenLoading',
  default: true,
});
