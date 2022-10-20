import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App";
import Scroll from "./components/Scroll";
import "./css/reset.scss";
import "./css/common.scss";
import redux_store from "./data/redux_store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Provider store={redux_store}>
        <Scroll />
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
