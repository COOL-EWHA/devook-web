import { apiClient } from '.';
import { IUser } from 'src/interfaces';
import { AuthTokens } from 'src/types';

export const authRefresh = (): Promise<AuthTokens> => apiClient.post('/auth/refresh').then((res) => res.data);

export const authLogin = (provider: string, code: string): Promise<IUser> =>
  apiClient.post(`/auth/login/${provider}`, { code }).then((res) => res.data);

export const authTestLogin = (refreshToken: string): Promise<IUser> =>
  apiClient.post('/auth/test-login', { refreshToken }).then((res) => res.data);

export const authLogout = (): Promise<void> => apiClient.post('/auth/logout').then((res) => res.data);
