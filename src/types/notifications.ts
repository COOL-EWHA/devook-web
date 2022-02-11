import { ListRequestParams } from '.';
import { INotification } from 'src/interfaces';

export type NotificationListParams = ListRequestParams & Pick<INotification, 'isRead'>;
