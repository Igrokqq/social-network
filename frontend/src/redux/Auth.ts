import AuthHelper from '../helpers/Auth';
import { User } from '../components/SignUpForm';
import { UserEntity } from '../api/User';
import { CustomAction } from './types';
import { SignInResponse } from '../api/Auth';

export const AUTH_ACTIONS = {
  LOGIN: 'login',
  LOGOUT: 'logout',
  UPDATE_USER: 'updateUser'
};

type State = {
  accessToken: string;
  refreshToken: string;
  isAuthenticated: boolean;
  user: UserEntity | null;
}
const _getActualState = (helper: typeof AuthHelper): State => {
  const accessToken: string = helper.getJwtAccessToken() || '';

  return {
    accessToken,
    refreshToken: helper.getJwtRefreshToken() || '',
    isAuthenticated: !!accessToken,
    user: helper.getUser()
  };
};

const initialState: State = _getActualState(AuthHelper);

export default function authReducer(state: State = initialState, action: CustomAction): State {
  if (action.type === AUTH_ACTIONS.LOGIN) {
    return {
      ...state,
      ...action.payload as SignInResponse
    };
  }
  if (action.type === AUTH_ACTIONS.LOGOUT) {
    return _getActualState(AuthHelper);
  }
  if (action.type === AUTH_ACTIONS.UPDATE_USER) {
    return {
      ...state,
      ...action.payload as User
    };
  }

  return state;
}
