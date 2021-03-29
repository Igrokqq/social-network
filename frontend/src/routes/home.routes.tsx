import React, { Fragment } from 'react';
import HomePage from '../pages/Home.page';
import RedirectIfUnauthenticated from './middlewares/redirect-if-unauthenticated.middleware';
import { AuthPages } from './auth.routes';

export const HomePages = {
  INDEX: '/'
};
// eslint-disable-next-line no-unused-vars,@typescript-eslint/no-unused-vars
export default function HomeRoutes({ store, dispatch }: any): JSX.Element {
  return (
    <Fragment>
      <RedirectIfUnauthenticated
        exact
        path={HomePages.INDEX}
        render={() => <HomePage store={store} dispatch={dispatch} />}
        redirectTo={AuthPages.SIGN_IN }
        isAuthenticated={store.getState().authReducer.isAuthenticated}
      />
    </Fragment>
  );
}
