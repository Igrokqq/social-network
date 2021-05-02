import React, { useState } from 'react';
import { SignInResponse } from '../api/Auth';
import AuthLayout from '../layouts/Auth';
import AuthHelper from '../helpers/Auth';
import { AUTH_ACTIONS } from '../redux/Auth';
import { ComponentReduxProps } from '../redux/types';
import SignInForm, { SignInFields } from '../components/SignInForm';
import RoutesConstants from '../routes/constants';
import AlertDismissible from '../components/Ui/AlertDismissible';
import TwitterLink from '../components/Ui/TwitterLink';

export default function SignIn({ dispatch }: ComponentReduxProps): JSX.Element {
  const [error, setErrorMessage] = useState<Error | null>(null);

  const _onSubmit = async (user: SignInFields): Promise<void> => {
    try {
      const tokens: SignInResponse = await AuthHelper.login(user);

      dispatch({
        type: AUTH_ACTIONS.LOGIN,
        payload: tokens
      });
      window.location.href = RoutesConstants.PROFILE.INDEX;
    } catch (error) {
      setErrorMessage(await error.json() as Error);
    }
  };

  return (
    <AuthLayout>
      <AlertDismissible
        title={error ? error.name : ''}
        content={error ? error.message : ''}
        onClose={() => setErrorMessage(null)}
        show={!!error}
      />
      <SignInForm onSubmit={_onSubmit}/>
      <div className="d-flex justify-content-end h-auto">
        <TwitterLink text="Sign Up" to={RoutesConstants.AUTH.SIGN_UP} />
      </div>
    </AuthLayout>
  );
}
