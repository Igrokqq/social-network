// POLYFILLS FOR BROWSERS THAT ARE NOT SUPPORTED IN SOME BROWSERS
import 'core-js'; // <- at the top of your entry point

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ReduxStore from './redux/store';

const rerenderPage = (state?: any): void => {
  ReactDOM.render(
    <React.StrictMode>
      <App store={ReduxStore} dispatch={ReduxStore.dispatch.bind(ReduxStore)} state={state}/>
    </React.StrictMode>,
    // eslint-disable-next-line no-undef
    document.getElementById('root')
  );
};

const rerenderWithUpdatedState = () => rerenderPage(ReduxStore.getState());

rerenderWithUpdatedState();

ReduxStore.subscribe(rerenderWithUpdatedState);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
