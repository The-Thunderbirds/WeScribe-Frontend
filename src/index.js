import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

import { FIREBASE_API_KEY, FIREBASE_DATABASE_URL } from "./api/constants";

window.firebase.initializeApp({
  apiKey: FIREBASE_API_KEY,
  databaseURL: FIREBASE_DATABASE_URL,
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
