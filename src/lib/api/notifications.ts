import { apiClient } from '.';

import { getQueryString } from 'src/lib/utils';
import { INotification } from 'src/interfaces';
import { ListRequestParams, NotificationEditParams } from 'src/types';

export const getNotificationList = (params: ListRequestParams): Promise<INotification[]> =>
  apiClient.get(`/notifications${getQueryString(params)}`).then((res) => res.data);

export const editNotification = ({ id, isRead }: NotificationEditParams): Promise<void> =>
  apiClient.patch(`/notifications/${id}`, { isRead }).then((res) => res.data);
