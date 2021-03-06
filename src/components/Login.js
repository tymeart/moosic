import React, { Component } from 'react';
import { CLIENT_ID, REDIRECT_URI } from '../hidden';
import '../styles/Login.css';

class Login extends Component {
  render() {
    return (
      <div className="Login center">
        <h1>Welcome to Moosic</h1>
        <p>To continue, please log in to Spotify</p>
        <a href={`https://accounts.spotify.com/authorize/?client_id=${CLIENT_ID}&response_type=token&redirect_uri=${REDIRECT_URI}`}>
          Log In
        </a>
      </div>
    );
  }
}

export default Login;
