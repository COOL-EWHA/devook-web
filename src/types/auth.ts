import { IUser } from 'src/interfaces';

export type AuthTokens = Pick<IUser, 'accessToken' | 'refreshToken'>;
