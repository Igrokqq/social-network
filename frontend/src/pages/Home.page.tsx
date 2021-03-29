import React from 'react';
import HomeLayout from '../layouts/Home.layout';

export default function HomePage({ store, dispatch }: any): JSX.Element {
  return (
    <HomeLayout store={store} dispatch={dispatch} />
  );
}
