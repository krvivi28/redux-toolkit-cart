import React from "react";
import App from "./App";
import "./index.css";
import * as ReactDomClient from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
const container = document.getElementById("root");
const root = ReactDomClient.createRoot(container);

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
