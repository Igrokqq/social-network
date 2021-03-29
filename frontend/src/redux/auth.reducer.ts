import { Action } from '../shared/types';
import AuthHelper from '../helpers/Auth.helper';
import { SignUpFormState } from '../components/SignUpForm/SignUpForm.types';

export const AUTH_ACTIONS = {
  LOGIN: 'login',
  LOGOUT: 'logout',
  UPDATE_USER: 'updateUser'
};

type State = {
  accessToken: string;
  refreshToken: string;
  isAuthenticated: boolean;
  user: SignUpFormState | unknown;
}
const _getActualState = (): State => {
  const accessToken = AuthHelper.getJwtAccessToken() || '';

  return {
    accessToken,
    refreshToken: AuthHelper.getJwtRefreshToken() || '',
    isAuthenticated: !!accessToken,
    user: AuthHelper.getUser() || {}
  };
};

const initialState: State = _getActualState();

export default function authReducer(state: State = initialState, action: Action): State {
  switch (action.type) {
    case AUTH_ACTIONS.LOGIN:
      AuthHelper.login(action.payload);
      return {
        ...state,
        ...action.payload
      };
    case AUTH_ACTIONS.LOGOUT:
      AuthHelper.logout();
      return _getActualState();
    case AUTH_ACTIONS.UPDATE_USER:
      AuthHelper.updateUser({
        ...(AuthHelper.getUser() || {}),
        ...action.payload
      });
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}
