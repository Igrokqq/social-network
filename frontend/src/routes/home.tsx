import {
  Route,
} from 'react-router-dom';
import React, {
  Fragment,
} from 'react';
import Home from '../pages/Home/Home';

// eslint-disable-next-line no-unused-vars,@typescript-eslint/no-unused-vars
export default function HomeRoutes(props: any) {
  return (
    <Fragment>
      <Route exact path="/" component={Home}/>
    </Fragment>
  );
}
