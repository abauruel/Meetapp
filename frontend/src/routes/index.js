import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Signin from '../pages/signin';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Signin} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
