import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App.css';
import Login from '../components/Login';
import Navbar from '../components/Navbar';
import MainContent from './MainContent';
import Middle from './Middle';
import Browse from './Browse';
import Player from './Player';
import PrivateRoute from './PrivateRoute';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-top">
            {this.props.isLoggedIn && <Navbar />}
            <Switch>
              <PrivateRoute exact path="/" isLoggedIn={this.props.isLoggedIn} component={MainContent} />
              <Route path="/login" component={Login} />
              <Route path="/middle" component={Middle} />
              <PrivateRoute path="/browse" isLoggedIn={this.props.isLoggedIn} component={Browse} />
            </Switch>
          </div>
          {this.props.isLoggedIn && <Player />}
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.isLoggedIn
  };
};

export default connect(mapStateToProps)(App);
