import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/App.css';
import Login from '../components/Login';
import Navbar from './Navbar';
import MainContent from './MainContent';
import Middle from './Middle';
import Browse from './Browse';
import GenrePlaylists from '../components/GenrePlaylists';
import Player from './Player';
import Search from './Search';
import Playlist from './Playlist';
import NoMatch from '../components/NoMatch';
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
              <PrivateRoute path="/view/:id" isLoggedIn={this.props.isLoggedIn} component={GenrePlaylists} />
              <PrivateRoute path="/playlist/:type/:id" isLoggedIn={this.props.isLoggedIn} component={Playlist} />
              <PrivateRoute path="/search" isLoggedIn={this.props.isLoggedIn} component={Search} />
              <Route component={NoMatch} />
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
