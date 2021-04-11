import React, { PropsWithChildren } from 'react';
import Logo from '../components/Logo';

import '../sass/layouts/Auth.sass';

export default function AuthLayout<T>(props: PropsWithChildren<T>): JSX.Element {
  return (
    <div className="auth d-flex">
      <div className="d-flex position-relative img-wrapper">
        <div className="img">
          <div className="logo">
            <Logo className="img" />
          </div>
        </div>
      </div>

      <main className="content">{props.children}</main>
    </div>
  );
}
