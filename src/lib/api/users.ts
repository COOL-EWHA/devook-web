import { apiClient } from '.';
import { UserProfile } from 'src/types';

export const getUser = (): Promise<UserProfile> => apiClient.get('/users').then((res) => res.data);

export const deleteUser = (): Promise<void> => apiClient.delete('/users').then((res) => res.data);
