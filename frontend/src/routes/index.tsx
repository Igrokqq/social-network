import React from 'react';
import {
  Switch,
  BrowserRouter,
  Route
} from 'react-router-dom';
import RedirectIfUnauthenticated from './middlewares/redirect-if-unauthenticated.middleware';
import RedirectIfAuthenticated from './middlewares/redirect-if-authenticated.middleware';
import RoutesConstants from './constants';
import HomePage from '../pages/Home';
import Auth from '../pages/Auth';
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import Profile from '../pages/Profile';
import NotFoundPage from '../pages/NotFound';
import { ComponentReduxProps } from '../redux/types';

export default function Routes({ store, dispatch }: ComponentReduxProps): JSX.Element {
  const { isAuthenticated } = store.getState().authReducer;

  return (
    <BrowserRouter>
      <Switch>
        <RedirectIfUnauthenticated
          exact
          path={RoutesConstants.HOME.INDEX}
          render={() => <HomePage />}
          redirectTo={RoutesConstants.AUTH.SIGN_IN}
          isAuthenticated={isAuthenticated}
        />
        <RedirectIfAuthenticated
          exact
          path={RoutesConstants.AUTH.INDEX}
          render={() => <Auth />}
          redirectTo={RoutesConstants.HOME.INDEX}
          isAuthenticated={isAuthenticated}
        />
        <RedirectIfAuthenticated
          exact
          path={RoutesConstants.AUTH.SIGN_UP}
          render={() => <SignUp />}
          redirectTo={RoutesConstants.HOME.INDEX}
          isAuthenticated={isAuthenticated}
        />
        <RedirectIfAuthenticated
          exact
          path={RoutesConstants.AUTH.SIGN_IN}
          render={() => <SignIn store={store} dispatch={dispatch} />}
          redirectTo={RoutesConstants.HOME.INDEX}
          isAuthenticated={isAuthenticated}
        />
        <RedirectIfUnauthenticated
          exact
          path={RoutesConstants.PROFILE.INDEX}
          render={() => <Profile store={store} dispatch={dispatch} />}
          redirectTo={RoutesConstants.AUTH.SIGN_IN}
          isAuthenticated={isAuthenticated}
        />
        <Route exact path="*" component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
}
