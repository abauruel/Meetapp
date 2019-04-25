import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import { isAuthenticated } from "../services/auth";

import Signin from "../pages/signin";
import Signup from "../pages/signup";

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

      <PrivateRoute exact path="/Dashboard" component={() => <h1>Logado</h1>} />
      <PrivateRoute
        exact
        path="/Preference"
        component={() => <h1>Preferencia</h1>}
      />
      <Route exact path="/signup" component={Signup} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
