import { IUser } from 'src/interfaces/IUser';

export type UserProfile = Pick<IUser, 'email' | 'nickname'>;
