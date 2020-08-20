import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Signup from './pages/Signup';
import Adress from './pages/Address';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Cart from './pages/Cart';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route exact path="/signup" component={Signup} />
    <Route path="/signup/address" component={Adress} />
    <Route path="/home" component={Home} />
    <Route path="/profile" component={Profile} />
    <Route path="/cart" component={Cart} />
  </Switch>
);

export default Routes;
