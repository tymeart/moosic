import React, { Component } from 'react';
import './App.css';
import Login from './Login';
import MainContent from './MainContent';
import Middle from './Middle';
import Browse from './Browse';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

class App extends Component {
  handleSongClick = (e) => {
    console.log(e.target.innerHTML);
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" render={() => <MainContent store={this.props.store} /> } />
          <Route path="/login" component={Login} />
          <Route path="/middle" render={() => <Middle store={this.props.store} />} />
          <Route path="/browse" render={() => <Browse store={this.props.store} />} />
        </Switch>
      </Router>
    );
  }
}

export default App;
