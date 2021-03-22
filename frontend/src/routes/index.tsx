import React from 'react';
import {
  Switch,
  BrowserRouter,
} from 'react-router-dom';
import HomeRoutes from './home';
import AuthRoutes from './auth';
import NotFoundRoutes from './not-found';

type Props = {
    state: any; // object,
    dispatch: any; // function
    store: any; // store
}
export default function Routes(props: Props) {
  return (
    <BrowserRouter>
      <Switch>
        {HomeRoutes(props).props.children}
        {AuthRoutes().props.children}
        {NotFoundRoutes(props).props.children}
      </Switch>
    </BrowserRouter>
  );
}
