import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import { isAuthenticated } from "../services/auth";

import Signin from "../pages/signin";
import Signup from "../pages/signup";
import Preference from "../pages/preferences";
import Dashboard from "../pages/dashboard";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: "/signin", state: { from: props.location } }}
        />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/signin" component={Signin} />

      <PrivateRoute exact path="/Dashboard" component={Dashboard} />
      <PrivateRoute exact path="/Preference" component={Preference} />
      <Route exact path="/signup" component={Signup} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
