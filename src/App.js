// @flow

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';

const App = (): React.Element<*> => (
  <Router history={createHistory()}>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/dashboard" component={Dashboard} />
    </div>
  </Router>
);

export default App;
