import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavBar from './NavBar';
import Home from './Home';
import About from './About';
import Users from './Users';
import Footer from './Footer';

const App = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/users" component={Users} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
      <Footer />
    </>
  );
};

export default App;
