import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import CreatePoint from './pages/CreatePoint';
import Home from './pages/Home';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/create-point" component={CreatePoint} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
