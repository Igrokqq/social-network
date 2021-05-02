import { StatusCodes } from 'http-status-codes';
import AuthHelper from '../helpers/Auth';

const _defaultCatch = async function ({ status }: Response, tryFn: () => Promise<void> | void): Promise<void> {
  if (status === StatusCodes.UNAUTHORIZED) {
    try {
      await AuthHelper.loginWithRefreshToken(AuthHelper.getJwtRefreshToken() || '');

      return tryFn();
    } catch (error) {
      console.error(error);
      return AuthHelper.logout();
    }
  }
};

export default {
  async tryCatch(
    tryFn: () => Promise<any> | any,
    catchFn?: (error: unknown) => Promise<void> | void
  ): Promise<any> {
    try {
      const result = await tryFn();

      return result;
    } catch (error) {
      return catchFn ? catchFn(error) : _defaultCatch(error, tryFn);
    }
  }
};
