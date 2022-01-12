import { IUser } from 'src/interfaces/IUser';

export type AuthTokens = Pick<IUser, 'accessToken' | 'refreshToken'>;
