import React, { PropsWithChildren } from 'react';
import Logo from '../components/Logo.component';

import '../sass/layouts/Profile.layout.sass';

export default function ProfileLayout(props: PropsWithChildren<unknown>): JSX.Element {
  return (
    <div className="profile">
      <div className="profile__layout">
        <header className="header">
          <Logo isLink={true} />
        </header>
        <main>{props.children}</main>
      </div>
    </div>
  );
}
