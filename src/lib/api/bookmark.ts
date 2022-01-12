import { AxiosRequestConfig } from 'axios';
import apiClient from '.';

const addToBookmarkList = async ({
  id,
  url,
  memo,
  authHeaderConfig,
}: {
  id?: number;
  url: string;
  memo?: string;
  authHeaderConfig: AxiosRequestConfig;
}) => apiClient.post(`/bookmarks`, { id, url, memo }, authHeaderConfig).then((res) => res.data);

export { addToBookmarkList };
