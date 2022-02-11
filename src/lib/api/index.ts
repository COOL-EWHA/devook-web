import axios from 'axios';

export const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_HOST || '/',
  withCredentials: true,
});

export const initAuthHeader = () => {
  // eslint-disable-next-line dot-notation
  apiClient.defaults.headers.common.Authorization = '';
};

export const updateAuthHeader = (accessToken = '') => {
  // eslint-disable-next-line dot-notation
  if (!accessToken) {
    initAuthHeader();
    return;
  }
  apiClient.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
};

initAuthHeader();

export * from './auth';
export * from './bookmarks';
export * from './users';
export * from './posts';
export * from './notifications';
