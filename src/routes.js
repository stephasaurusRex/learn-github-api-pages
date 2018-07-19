import React from "react";
import { Route, Switch } from "react-router-dom";

import Grid from "./pages/Grid/Grid";
import Landing from "./pages/Landing/Landing.loader";
import Todos from "./pages/Todos/Todos.loader";

/* Application Routes */

const Routes = () => (
  <Switch>
    <Route
      exact
      path="/"
      component={Landing} />
    <Route
      exact
      path="/todos"
      component={Todos} />
    <Route
      exact
      path="/grid"
      component={Grid} />
    <Route component={() => <div>404</div>} />
  </Switch>);

export default Routes;
