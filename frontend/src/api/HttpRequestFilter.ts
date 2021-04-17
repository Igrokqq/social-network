import { StatusCodes } from 'http-status-codes';
import AuthHelper from '../helpers/Auth';

const _defaultCatch = async ({ status }: Response, tryFn: () => Promise<void> | void): Promise<void> => {
  if (status === StatusCodes.UNAUTHORIZED) {
    try {
      await AuthHelper.loginWithRefreshToken(AuthHelper.getJwtRefreshToken() || '');
      await tryFn();
    } catch (error) {
      console.error(error);
      AuthHelper.logout();
    }
  }
};

export default {
  async tryCatch(
    tryFn: () => Promise<void> | void,
    catchFn?: (error: unknown) => Promise<void> | void
  ): Promise<void> {
    try {
      await tryFn();
    } catch (error) {
      if (catchFn) {
        await catchFn(error);
        return;
      }

      await _defaultCatch(error, tryFn);
    }
  }
};
