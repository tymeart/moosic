import React, { Component } from 'react';
import './App.css';
import Login from './Login';
import MainContent from './MainContent';
import Middle from './Middle';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

export const authStatus = {
  isAuthenticated: false,
  authenticate() {
    let accessToken = '';
    if (window.location.hash) {
      const url = window.location.hash;
      accessToken = url.split('&')[0].split('=')[1];
    } else {
      console.log('ACCESS DENIED');
    }

    fetch('https://api.spotify.com/v1/artists/0OdUWJ0sBjDrqHygGUXeCF',
      {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      })
      .then(res => {
        console.log(res);
      });
      // this.isAuthenticated = true
  },
  signout() {
    this.isAuthenticated = false;
  }
};

class App extends Component {
  handleSongClick = (e) => {
    console.log(e.target.innerHTML);
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/middle" render={() => <Middle store={this.props.store} />} />
          <Route path="/" render={() => <MainContent /> } />
        </Switch>
      </Router>
    );
  }
}

export default App;
