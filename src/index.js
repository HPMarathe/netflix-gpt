import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //Removing React.StrictMode so that i will not get everything twice.
  // React with this strict mode it is doing everything twice becaue there is inconsistency in your web.This only happens in development.
  //   <React.StrictMode>
  // <App />
  // </React.StrictMode>

  <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
