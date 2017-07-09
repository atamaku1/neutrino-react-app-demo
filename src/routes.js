import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import React from 'react';
import Home from './components/home';

const Routes = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/home" component={Home}/>
    </div>
  </Router>
);

export default Routes;
