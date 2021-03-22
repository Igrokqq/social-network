import React, {
  Fragment,
} from 'react';
import {
  Route,
} from 'react-router-dom';
import SignUp from '../pages/Auth/SignUp/SignUp';
import SignIn from '../pages/Auth/SignIn/SignIn';

export const AuthPages = {
  SIGN_IN: '/sign-in',
  SIGN_UP: '/sign-up'
};

export default function AuthRoutes(): JSX.Element {
  return (
    <Fragment>
      <Route exact path={AuthPages.SIGN_UP} render={() => <SignUp />} />
      <Route exact path={AuthPages.SIGN_IN} component={SignIn} />
    </Fragment>
  );
}
