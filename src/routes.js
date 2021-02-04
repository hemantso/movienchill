import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import MovieDetails from './components/MovieDetails';

const Routes = () => (
  <>
    <Switch>
      <Route path="/details/:id" exact component={MovieDetails} />
      <Route path="/" component={Home} />
    </Switch>
  </>
);

export default Routes;
