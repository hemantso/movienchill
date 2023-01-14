import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import reducers from './reducers';
import MainRoutes from './routes';
import './assets/css/app.css';

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk)),
);
const history = createBrowserHistory();
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Router history={history}>
    <Provider store={store}>
      <MainRoutes store={store} />
    </Provider>
  </Router>,
);
