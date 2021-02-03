import React from "react";
import ReactDOM from "react-dom";
import createHistory from "history/createBrowserHistory";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import reducers from "./reducers";
import Routes from "./routes";
import "./assets/css/app.scss";

const store = createStore(reducers, applyMiddleware(thunk));
const history = createHistory();
ReactDOM.render(
  <Router history={history}>
    <Provider store={store}>
      <Routes store={store} />
    </Provider>
  </Router>,

  document.getElementById("root")
);