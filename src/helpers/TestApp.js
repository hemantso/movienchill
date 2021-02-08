import React from 'react';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Router } from 'react-router-dom';
import Routes from '../routes';
import reducer from '../reducers/index';

const store = createStore(reducer, applyMiddleware(thunk));
const history = createBrowserHistory();
const TestApp = () => (
  <Router history={history}>
    <Provider store={store}>
      <Routes store={store} />
    </Provider>
  </Router>
);

export default TestApp;
