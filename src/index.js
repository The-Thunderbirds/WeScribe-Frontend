import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store, { persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';

import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { FIREBASE_API_KEY, FIREBASE_DATABASE_URL } from './api/constants';

const app = (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
window.firebase.initializeApp({
  apiKey: FIREBASE_API_KEY,
  databaseURL: FIREBASE_DATABASE_URL,
});

ReactDOM.render(
  <React.StrictMode>
    {app}
  </React.StrictMode>,
  document.getElementById('root')
);