import React from 'react';
import Routes from './routes';
import './App.css';

export default function App(props: any): JSX.Element {
  return (
    <div className="App">
      {Routes(props)}
    </div>
  );
}
