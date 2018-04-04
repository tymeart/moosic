import React, { Component } from 'react';
import './App.css';
import Player from './Player';
import Playlist from './Playlist';
import Login from './Login';
// import { CLIENT_ID, REDIRECT_URI } from './hidden';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
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

// const AuthButton = withRouter(({ history })) => {
//   return (
//     authStatus.isAuthenticated ? (
//       <p>
//         <button onClick={() => {
//           authStatus.signout(() => history.push('/'));
//         }}>Sign Out</button>
//       </p>
//     ) : (
//       <p>You're not logged in.</p>
//     )
//   );
// }

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
        <Switch>
          <Route path="/login" component={Login} />
          <PrivateRoute path="/" component={MainContent} />
        </Switch>
      </Router>
    );
  }
}

export default App;
