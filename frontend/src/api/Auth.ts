import { post, get } from './Request';
import { User } from '../components/SignUpForm';
import { UserEntity } from './User';
import ENDPOINTS from './endpoints';
import { SignInFields } from '../components/SignInForm';

export type SignInResponse = {
  readonly accessToken: string;
  readonly refreshToken: string;
}
export default {
  signUp(user: User): Promise<UserEntity> {
    return post(`${ENDPOINTS.AUTH._NAMESPACE()}/${ENDPOINTS.AUTH.SIGN_UP()}`, {
      body: JSON.stringify(user)
    }) as Promise<UserEntity>;
  },
  login(signInFields: SignInFields): Promise<SignInResponse> {
    return post(`${ENDPOINTS.AUTH._NAMESPACE()}/${ENDPOINTS.AUTH.SIGN_IN()}`, {
      body: JSON.stringify(signInFields)
    }) as Promise<SignInResponse>;
  },
  getUserByAccessToken(accessToken: string): Promise<UserEntity> {
    return get(
      `${ENDPOINTS.AUTH._NAMESPACE()}/${ENDPOINTS.AUTH.USER_BY_ACCESS_TOKEN(accessToken)}`
    ) as Promise<UserEntity>;
  },
  loginWithRefreshToken(refreshToken: string): Promise<SignInResponse> {
    return post(`${ENDPOINTS.AUTH._NAMESPACE()}/${ENDPOINTS.AUTH.LOGIN_WITH_REFRESH_TOKEN()}`, {
      body: JSON.stringify({
        refreshToken
      })
    }) as Promise<SignInResponse>;
  }
};
