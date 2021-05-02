export default {
  AUTH: {
    INDEX: '/auth',
    SIGN_IN: '/sign-in',
    SIGN_UP: '/sign-up',
  },
  PROFILE: {
    INDEX: '/profile'
  },
  HOME: {
    INDEX: '/'
  },
  MESSAGES: {
    INDEX: '/messages',
    DIRECT: (toUserId: string): string => `/messages/${toUserId}`,
    DIRECT_PATH: '/messages/:userId'
  }
};
