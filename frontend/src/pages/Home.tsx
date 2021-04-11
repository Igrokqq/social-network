import React, { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Header from '../layouts/HomeHeader';

export default function HomePage(): JSX.Element {
  return (
    <Fragment>
      <Container className="d-flex" fluid>
        <Header />
        <main>Content</main>
      </Container>
    </Fragment>
  );
}
