// POLYFILLS FOR BROWSERS THAT ARE NOT SUPPORTED IN SOME BROWSERS
import 'core-js'; // <- at the top of your entry point

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import io, { Socket } from 'socket.io-client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ReduxStore from './redux/store';

const _connectSocketIo = function (url: string): Promise<typeof Socket> {
  return new Promise((resolve) => {
    const socket: typeof Socket = io.connect(url, {
      transports: ['polling', 'websocket']
    });

    socket.on('connected', (): void => {
      resolve(socket);
    });

    socket.on('disconnect', (): void => {
    });
  });
};
const rerenderPage = async (state?: any): Promise<void> => {
  const socket: typeof Socket = await _connectSocketIo(process.env.REACT_APP_SERVER_BASE_URL || '');

  ReactDOM.render(
    <React.StrictMode>
      <App
        store={ReduxStore}
        dispatch={ReduxStore.dispatch.bind(ReduxStore)}
        state={state}
        socket={socket}
      />
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
