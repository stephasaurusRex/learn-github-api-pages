import React from "react";
import { Route, Switch } from "react-router-dom";

import Landing from "./pages/Landing/Landing.loader";

/* Application Routes */

const Routes = () => (
  <Switch>
    <Route
      exact
      path="/"
      component={Landing} />
  </Switch>);

export default Routes;
