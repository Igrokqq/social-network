import { SignUpFormState } from '../components/SignUpForm/SignUpForm.types';

const _setUser = (user: SignUpFormState): void => {
  localStorage.setItem('user', JSON.stringify(user || '{}'));
};
const _removeUser = (): void => {
  localStorage.removeItem('user');
};
const _setJwtAccessToken = (token: string): void => {
  localStorage.setItem('accessToken', JSON.stringify(token));
};
const _setJwtRefreshToken = (token: string): void => {
  localStorage.setItem('refreshToken', JSON.stringify(token));
};

type LoginPayload = {
  user: SignUpFormState,
  accessToken: string,
  refreshToken: string
};

export default {
  getJwtAccessToken(): string | null {
    return JSON.parse(localStorage.getItem('accessToken') || 'null');
  },
  getJwtRefreshToken(): string | null {
    return JSON.parse(localStorage.getItem('refreshToken') || 'null');
  },
  getUser(): SignUpFormState | null {
    return JSON.parse(localStorage.getItem('user') || 'null');
  },
  logout(): void {
    localStorage.clear();
  },
  login({ user, accessToken, refreshToken }: LoginPayload): void {
    _setUser(user);
    _setJwtAccessToken(accessToken);
    _setJwtRefreshToken(refreshToken);
  },
  updateUser(payload: any): void {
    _removeUser();
    _setUser(payload);
  }
};
