import React, {
  Fragment,
} from 'react';
import {
  Route,
} from 'react-router-dom';
import NotFound from '../pages/NotFound/NotFound';

// eslint-disable-next-line no-unused-vars,@typescript-eslint/no-unused-vars
export default function NotFoundRoutes(props: any) {
  return (
    <Fragment>
      <Route exact path="*" component={NotFound} />
    </Fragment>
  );
}
