import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import MovieDetails from "./components/MovieDetails";

class Routes extends React.Component {
  render() {
    return (
      <>
        <Switch>
          <Route
            path={"/movienchill/details/:id"}
            exact
            component={MovieDetails}
          />
          <Route path={"/movienchill"} component={Home} />
        </Switch>
      </>
    );
  }
}

export default Routes;