import React, { Component } from 'react';
import '../App.css';
import Login from '../components/Login';
import MainContent from './MainContent';
import Middle from './Middle';
import Browse from './Browse';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={MainContent} />
          <Route path="/login" component={Login} />
          <Route path="/middle" component={Middle} />
          <Route path="/browse" component={Browse} />
        </Switch>
      </Router>
    );
  }
}

export default App;
