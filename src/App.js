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
import PropTypes from 'prop-types';
import { logIn } from './actions/index';

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

// const PrivateRoute = ({component: Component, ...rest}) => {
//   return (
//     <Route
//       {...rest}
//       render={props => (
//         authStatus.isAuthenticated === true
//         ? <Component {...props} />
//         : <Redirect to={{
//             pathName: '/login',
//             location: { from: props.location }
//           }} />
//       )}
//     />
//   );
// }

class MainContent extends Component {
  componentDidMount() {
    this.props.history.push('/login');
  }

  render() {
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
}

class Middle extends Component {
  static contextTypes = {
        router: PropTypes.object
    }

  constructor(props, context) {
      super(props, context);
  }

  componentDidMount() {
    let accessToken = '';
    if (window.location.hash) {
      const url = window.location.hash;
      accessToken = url.split('&')[0].split('=')[1];
      this.props.store.dispatch(logIn(accessToken));
      this.props.history.push('/');
    } else {
      console.log('ACCESS DENIED');
    }
  }

  render() {
    return (
      <div>
        The intermediary component!
      </div>
    );
  }
}

class App extends Component {

  handleSongClick = (e) => {
    console.log(e.target.innerHTML);
  }

  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/middle" render={() => <Middle store={this.props.store} />} />
          <Route path="/" render={() => <MainContent history={history} /> } />
        </Switch>
      </Router>
    );
  }
}

export default App;
