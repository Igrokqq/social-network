export default {
  AUTH: {
    _NAMESPACE: (): string => 'auth',
    SIGN_UP: (): string => 'sign-up',
    SIGN_IN: (): string => 'sign-in',
    USER_BY_ACCESS_TOKEN: (accessToken: string): string => `access-token/${accessToken}/user`,
    LOGIN_WITH_REFRESH_TOKEN: (): string => 'refresh-token'
  },
  USER: {
    _NAMESPACE: (): string => 'users',
    UPDATE_ONE: (userId: string): string => `${userId}`
  }
};
