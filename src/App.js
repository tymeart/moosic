import React, { Component } from 'react';
import './App.css';
import Player from './Player';
import Playlist from './Playlist';
import Login from './Login';
import { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI } from './hidden';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";

const authStatus = {
  isAuthenticated: false,
  authenticate(cb) {
    const url = window.location.href;
    const authCode = url.split('code=')[1];

    fetch('https://accounts.spotify.com/api/token',
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        },
        method: 'POST',
        body: {
          grant_type: 'authorization_code',
          code: authCode,
          redirect_uri: REDIRECT_URI,
          client_id: CLIENT_ID,
          client_secret: CLIENT_SECRET
        }
      })
      .then(res => {
        console.log(res);
        // cb ?
      });
      // this.isAuthenticated = true
  },
  signout() {
    this.isAuthenticated = false;
  }
};

const AuthButton = withRouter(({ history })) => {
  return (
    authStatus.isAuthenticated ? (
      <p>
        <button onClick={() => {
          authStatus.signout(() => history.push('/'));
        }}>Sign Out</button>
      </p>
    ) : (
      <p>You're not logged in.</p>
    )
  );
}

const PrivateRoute = ({component: Component, ...rest}) => {
  return (
    <Route
      {...rest}
      render={props => (
        authStatus.isAuthenticated === true
        ? <Component {...props} />
        : <Redirect to={{
            pathName: '/login',
            location: { from: props.location }
          }} />
      )}
    />
  );
}

const MainContent = () => {
  return (
    <div>
      <header className="App-header">
        <h1 className="App-title">a moosic player</h1>
      </header>
      <main>
        <Player />
        <Playlist
          onSongClick={this.handleSongClick}
        />
      </main>
    </div>
  );
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songTitle: '',
      isLoggedIn: false
    }
  }

  handleSongClick = (e) => {
    console.log(e.target.innerHTML);
  }

  render() {
    return (
      <Router>
        <div>
          <AuthButton />
          <Route path="/login" component={Login} />
          <PrivateRoute path="/protected" component={MainContent} />
        </div>
      </Router>
    );
  }
}

export default App;
