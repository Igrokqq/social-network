import React from 'react';
import Routes from './routes';
import './App.css';

type Props = {
  state: any,
  store: any,
  dispatch: any
}
export default function App(props: Props): any {
  return (
    <div className="App">
      {Routes(props)}
    </div>
  );
}
