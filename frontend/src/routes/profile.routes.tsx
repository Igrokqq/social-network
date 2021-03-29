/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { Fragment } from 'react';
import Profile from '../pages/Profile.page';
import RedirectIfUnauthenticated from './middlewares/redirect-if-unauthenticated.middleware';
import { AuthPages } from './auth.routes';

export const ProfilePages = {
  INDEX: '/profile',
};

export default function ProfileRoutes({ dispatch, store }: any): JSX.Element {
  return (
    <Fragment>
      <RedirectIfUnauthenticated
        exact
        isAuthenticated={store.getState().authReducer.isAuthenticated}
        path={ProfilePages.INDEX}
        render={() => <Profile store={store} dispatch={dispatch} />}
        redirectTo={AuthPages.SIGN_IN}
      />
    </Fragment>
  );
}
