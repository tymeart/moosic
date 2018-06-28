import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/App.css';
import Login from '../components/Login';
import Navbar from '../components/Navbar';
import MainContent from './MainContent';
import Middle from './Middle';
import Browse from './Browse';
import Player from './Player';
import Search from './Search';
import Playlist from './Playlist';
import NoMatch from '../components/NoMatch';
import PrivateRoute from './PrivateRoute';
import { logIn } from '../actions/index';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

function isLoggedIn() {
  console.log('THIS IS ISLOGGEDIN')
  return localStorage.getItem('accessToken') ? true : false;
}

class App extends Component {
    constructor(props) {
      super(props);
      if( isLoggedIn() ) {
        this.props.dispatch(logIn(localStorage.getItem('accessToken')))            
      }            
    }


  render() {
    console.log('THIS IS IN RENDER')
    console.log(this.props.isLoggedIn)
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
              <PrivateRoute path="/search" isLoggedIn={this.props.isLoggedIn} component={Search} />
              <PrivateRoute path="/playlist" isLoggedIn={this.props.isLoggedIn} component={Playlist} />
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
