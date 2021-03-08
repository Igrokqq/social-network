import React, { Component, ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import routes from './routes';

import './App.css';

export default class App<T> extends Component {
  constructor(props: T) {
    super(props);
    this.state = {};
  }

  render(): ReactNode {
    return (
      <div className="App">
        <BrowserRouter>{routes}</BrowserRouter>
      </div>
    )
  }
}