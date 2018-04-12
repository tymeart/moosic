import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Player from './Player';
import Playlist from './Playlist';
import { logOut } from './actions/index';

export default class MainContent extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  componentWillMount() {
    if (this.props.store.getState().isLoggedIn === false) {
      this.context.router.history.push('/login');
    }
  }

  logOutAndRedirect = () => {
    this.props.store.dispatch(logOut());
    this.context.router.history.push('/login');
  }

  getArtist = () => {
    fetch('https://api.spotify.com/v1/artists/2XziUthG3Ug3eiWuE5KRsp/',
      {
        headers: {
          'Authorization': `Bearer ${this.props.store.getState().accessToken}`
        }
      })
    .then(res => res.json())
    .then(data => console.log(data));
  }

  render() {
    return (
      <div>
        <header className="App-header">
          <h1 className="App-title">a moosic player</h1>
        </header>
        <main>
          <button onClick={this.logOutAndRedirect}>Log Out</button>
          <Player />
          <Playlist
            onSongClick={this.handleSongClick}
          />
          <button onClick={this.getArtist}>Get Artist</button>
        </main>
      </div>
    );
  }
}
