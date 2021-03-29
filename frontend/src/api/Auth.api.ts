import Base from './Base.api';
import { SignUpFormState } from '../components/SignUpForm/SignUpForm.types';
import { SignInFormState } from '../components/SignInForm/SignInForm.types';

export type SignInResponse = {
  accessToken: string,
  refreshToken: string
};

export default {
  signUp: (payload: SignUpFormState): Promise<any | never> => Base.post('sign-up', payload),
  signIn: (payload: SignInFormState): Promise<SignInResponse | never> => Base.post('sign-in', payload),
  getUserFromJwtAccessToken: (accessToken: string): Promise<any | never> => Base.get(`access-token/${accessToken}/user`),
  checkJwtAccessToken: (token: string): Promise<any | never> => Base.post(`access-token/${token}/validate`, {}),
};
