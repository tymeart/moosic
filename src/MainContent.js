import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Player from './Player';
import Playlist from './Playlist';

export default class MainContent extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  componentWillMount() {
    if (this.props.store.getState().isLoggedIn === false) {
      this.context.router.history.push('/login');
    }
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
