import React, { Fragment } from 'react';
import HomeHeaderNavigationPanel from '../../components/HomeHeaderNavigationPanel';

import '../../sass/layouts/HomeHeader.sass';

export default function HomeHeader(): JSX.Element {
  return (
    <Fragment>
      <header className="header d-flex flex-column justify-content-start align-items-center">
        <HomeHeaderNavigationPanel />
      </header>
    </Fragment>
  );
}
