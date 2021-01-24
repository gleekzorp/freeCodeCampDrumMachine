import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import store from "./redux/store";

import "./styles.css";

import DrumMachine from "./components/DrumMachine";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <DrumMachine />
    </Provider>
  </React.StrictMode>,
  rootElement
);
