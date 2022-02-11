import { apiClient } from '.';

import { getQueryString } from 'src/lib/utils';
import { INotification } from 'src/interfaces';
import { ListRequestParams, NotificationIsReadEditParams } from 'src/types';

export const getNotificationList = (params: ListRequestParams): Promise<INotification[]> =>
  apiClient.get(`/notifications${getQueryString(params)}`).then((res) => res.data);

export const editNotificationIsRead = ({ id, isRead }: NotificationIsReadEditParams): Promise<void> =>
  apiClient.patch(`/notifications/${id}`, { isRead }).then((res) => res.data);
