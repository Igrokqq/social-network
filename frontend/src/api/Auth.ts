import { post, get } from './Request';
import { User } from '../components/SignUpForm';
import ENDPOINTS from './endpoints';
import { SignInFields } from '../components/SignInForm';

export type SignInResponse = {
  accessToken: string;
  refreshToken: string;
}
export default {
  signUp(user: User): Promise<User> {
    return post(`${ENDPOINTS.AUTH._NAMESPACE()}/${ENDPOINTS.AUTH.SIGN_UP()}`, {
      body: JSON.stringify(user)
    }) as Promise<User>;
  },
  login(signInFields: SignInFields): Promise<SignInResponse> {
    return post(`${ENDPOINTS.AUTH._NAMESPACE()}/${ENDPOINTS.AUTH.SIGN_IN()}`, {
      body: JSON.stringify(signInFields)
    }) as Promise<SignInResponse>;
  },
  getUserByAccessToken(accessToken: string): Promise<User> {
    return get(
      `${ENDPOINTS.AUTH._NAMESPACE()}/${ENDPOINTS.AUTH.USER_BY_ACCESS_TOKEN(accessToken)}`
    ) as Promise<User>;
  }
};
