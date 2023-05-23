import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {store} from './store';
import {Provider} from 'react-redux';
import {getToken} from 'services/token';
import {logIn} from 'store/user-process/user-process';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const token = getToken();

if (token) {
  store.dispatch(logIn(token));
}

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <App />
    </Provider>
  </React.StrictMode>
);
