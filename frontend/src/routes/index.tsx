import React from 'react';
import {
  Switch,
  BrowserRouter,
} from 'react-router-dom';
import HomeRoutes from './home.routes';
import AuthRoutes from './auth.routes';
import NotFoundRoutes from './not-found.routes';
import ProfileRoutes from './profile.routes';

export default function Routes(props: any): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        {HomeRoutes(props).props.children}
        {AuthRoutes(props).props.children}
        {ProfileRoutes(props).props.children}
        {NotFoundRoutes(props).props.children}
      </Switch>
    </BrowserRouter>
  );
}
