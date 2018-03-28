import React from 'react';
import { CLIENT_ID, REDIRECT_URI } from './hidden';

const Login = () => {
  return (
    <div>
      <h1>Welcome to Moosic</h1>
      <p>To continue, please log in to Spotify</p>
      <a href={`https://accounts.spotify.com/authorize/?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${REDIRECT_URI}`}>
        Log In
      </a>
    </div>
  );
}

export default Login;
