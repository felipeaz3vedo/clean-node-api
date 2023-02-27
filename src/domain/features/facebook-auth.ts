import { AuthenticationError } from '../errors/authentication';

export interface FacebookAuth {
  execute: (token: string) => Promise<AccessToken | AuthenticationError>;
}

type AccessToken = {
  accessToken: string;
};
