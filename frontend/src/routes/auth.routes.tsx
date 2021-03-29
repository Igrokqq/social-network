import React, { Fragment } from 'react';
import SignUp from '../pages/SignUp.page';
import SignIn from '../pages/SignIn.page';
import RedirectIfAuthenticated from './middlewares/redirect-if-authenticated.middleware';

export const AuthPages = {
  SIGN_IN: '/sign-in',
  SIGN_UP: '/sign-up',
  LOGOUT: '/logout'
};

export default function AuthRoutes({ dispatch, store }: any): JSX.Element {
  const { isAuthenticated } = store.getState().authReducer;

  return (
    <Fragment>
      <RedirectIfAuthenticated
        exact
        path={AuthPages.SIGN_UP}
        isAuthenticated={isAuthenticated}
        redirectTo="/profile"
        render={() => <SignUp />}
      />
      <RedirectIfAuthenticated
        exact
        path={AuthPages.SIGN_IN}
        isAuthenticated={isAuthenticated}
        redirectTo="/profile"
        render={() => <SignIn dispatch={dispatch} store={store} />}
      />
    </Fragment>
  );
}
