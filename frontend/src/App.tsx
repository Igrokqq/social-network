import React from 'react';
import Routes, { PageComponentProps } from './routes';

import 'bootstrap/dist/css/bootstrap.css';
import './App.sass';

export default function App(props: PageComponentProps): JSX.Element {
  return (
    <div className="App">
      {Routes(props)}
    </div>
  );
}
