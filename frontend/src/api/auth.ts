import Base from './base';
import { SignUpFormState } from '../components/SignUpForm/types';

const ENDPOINTS = {
  SIGN_UP: 'sign-up',
};

export default {
  sendSignUpRequest: (payload: SignUpFormState): Promise<string | never> => Base.post(ENDPOINTS.SIGN_UP, payload)
};
