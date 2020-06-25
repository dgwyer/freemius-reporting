import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// --- Start ---
const Freemius = require("./Freemius");
const FS__API_SCOPE = 'developer'
const FS__API_DEV_ID = 4301;
const FS__API_PUBLIC_KEY = 'pk_c516c0e6c51a9ffd2c113283a1db6';
const FS__API_SECRET_KEY = 'sk_z;&UU]qF-M+J{)4a%F!h?xmhKF!iA';
const fb = new Freemius(FS__API_SCOPE, FS__API_DEV_ID, FS__API_PUBLIC_KEY, FS__API_SECRET_KEY);
fb.Api('/plugins.json', 'GET', [], [], function (e) {
    console.log(e);
});
// --- End ---

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
