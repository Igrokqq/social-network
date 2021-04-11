import React from 'react';
import Routes from './routes';

import 'bootstrap/dist/css/bootstrap.css';

import './App.sass';

export default function App(props: any): JSX.Element {
  return (
    <div className="App">
      {Routes(props)}
    </div>
  );
}
