import React, { Fragment } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { ModalContainer } from "react-router-modal";
import "react-router-modal/css/react-router-modal.css";

import { isAuthenticated } from "../services/auth";

import Signin from "../pages/signin";
import Signup from "../pages/signup";
import Preference from "../pages/preferences";
import Dashboard from "../pages/dashboard";
import Meetup from "../pages/meetup";
import Search from "../pages/search";
import NewMeetup from "../pages/newmeetup";
import Profile from "../pages/profile";

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
    <Fragment>
      <Switch>
        <Route path="/signin" component={Signin} />

        <PrivateRoute exact path="/Dashboard" component={Dashboard} />
        <PrivateRoute exact path="/Preference" component={Preference} />
        <Route exact path="/Profile" component={Profile} />
        <Route exact path="/Newmeetup" component={NewMeetup} />
        <Route exact path="/Search" component={Search} />
        <Route exact path="/Meetup/:id" component={Meetup} />
        <Route exact path="/signup" component={Signup} />
      </Switch>
      <ModalContainer />
    </Fragment>
  </BrowserRouter>
);

export default Routes;
