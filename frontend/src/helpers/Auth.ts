import AuthApi, { SignInResponse } from '../api/Auth';
import { User } from '../components/SignUpForm';
import { SignInFields } from '../components/SignInForm';

const _setUserInLocalStorage = (user: User): void => {
  localStorage.setItem('user', JSON.stringify(user || '{}'));
};
const _removeUserInLocalStorage = (): void => {
  localStorage.removeItem('user');
};
const _setJwtAccessTokenInLocalStorage = (token: string): void => {
  localStorage.setItem('accessToken', JSON.stringify(token));
};
const _setJwtRefreshTokenInLocalStorage = (token: string): void => {
  localStorage.setItem('refreshToken', JSON.stringify(token));
};

export default {
  getJwtAccessToken(): string | null {
    return JSON.parse(localStorage.getItem('accessToken') || 'null');
  },
  getJwtRefreshToken(): string | null {
    return JSON.parse(localStorage.getItem('refreshToken') || 'null');
  },
  getUser(): User | null {
    return JSON.parse(localStorage.getItem('user') || 'null');
  },
  logout(): void {
    localStorage.clear();
  },
  signUp(user: User): Promise<User> {
    return AuthApi.signUp(user);
  },
  async login(signInFields: SignInFields): Promise<SignInResponse> {
    const { accessToken, refreshToken }: SignInResponse = await AuthApi.login(signInFields);
    const user: User = await AuthApi.getUserByAccessToken(accessToken);

    _setUserInLocalStorage(user);
    _setJwtAccessTokenInLocalStorage(accessToken);
    _setJwtRefreshTokenInLocalStorage(refreshToken);

    return {
      accessToken,
      refreshToken
    };
  },
  updateUser(user: User): void {
    _removeUserInLocalStorage();
    _setUserInLocalStorage(user);
  }
};
