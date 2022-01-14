import { IUser } from 'src/interfaces';

export type UserProfile = Pick<IUser, 'email' | 'nickname'>;
