import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import combineReducers from "./reducers/index";
import middleware from "./middleware";

const store = createStore(combineReducers, middleware)

ReactDOM.render(
  <provider store={store}>
    <App />    
  </provider>,
  document.getElementById("root")
);
