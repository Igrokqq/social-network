import React, { PropsWithChildren } from 'react';
import { Container } from 'react-bootstrap';
import HomeHeader from './partials/HomeHeader';

import '../sass/layouts/Home.sass';

export default function HomeLayout({ children: componentChildren }: PropsWithChildren<unknown>): JSX.Element {
  return (
    <div className="home">
      <Container className="d-flex content-container" fluid>
        <HomeHeader />
        <main className="content w-100">{componentChildren}</main>
      </Container>
    </div>
  );
}
