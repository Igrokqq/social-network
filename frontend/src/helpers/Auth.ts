import AuthApi, { SignInResponse } from '../api/Auth';
import { User } from '../components/SignUpForm';
import { UserEntity } from '../api/User';
import { SignInFields } from '../components/SignInForm';
import UserHelper from './User';

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
  getUser(): UserEntity | null {
    return JSON.parse(localStorage.getItem('user') || 'null');
  },
  logout(): void {
    localStorage.clear();
  },
  signUp(user: User): Promise<UserEntity> {
    return AuthApi.signUp(user);
  },
  async loginWithRefreshToken(refreshToken: string): Promise<SignInResponse> {
    const {
      accessToken,
      refreshToken: newRefreshToken
    }: SignInResponse = await AuthApi.loginWithRefreshToken(refreshToken);

    _setJwtAccessTokenInLocalStorage(accessToken);
    _setJwtRefreshTokenInLocalStorage(newRefreshToken);

    return {
      accessToken,
      refreshToken
    };
  },
  async login(signInFields: SignInFields): Promise<SignInResponse> {
    const { accessToken, refreshToken }: SignInResponse = await AuthApi.login(signInFields);
    const user: UserEntity = await AuthApi.getUserByAccessToken(accessToken);

    UserHelper.setUserInLocalStorage(user);
    _setJwtAccessTokenInLocalStorage(accessToken);
    _setJwtRefreshTokenInLocalStorage(refreshToken);

    return {
      accessToken,
      refreshToken
    };
  }
};
