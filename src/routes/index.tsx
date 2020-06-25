import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Signup from './pages/Signup';
import Adress from './pages/Adress';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route exact path="/signup" component={Signup} />
    <Route path="/signup/adress" component={Adress} />
  </Switch>
);

export default Routes;
