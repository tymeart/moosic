import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Player from './Player';
import Playlist from './Playlist';
import { logOut } from '../actions/index';
import { Link } from 'react-router-dom';

class MainContent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tracklist: []
    }
  }

  static contextTypes = {
    router: PropTypes.object
  }

  componentWillMount() {
    if (this.props.state.isLoggedIn === false) {
      this.context.router.history.push('/login');
    }
  }

  logOutAndRedirect = () => {
    this.props.logOut();
    this.context.router.history.push('/login');
  }

  getAlbum = () => {
    fetch('https://api.spotify.com/v1/albums/52fkHkIZ3QUHs90QuEGYDB',
      {
        headers: {
          'Authorization': `Bearer ${this.props.state.accessToken}`
        }
      })
    .then(res => res.json())
    .then(data => this.setState({tracklist: data.tracks.items}));
  }

  render() {
    return (
      <div className="App">
        <div className="App-main">
          <header className="App-header">
            <nav>
              <h1 className="App-title">a moosic player</h1>
              <Link to="/search">Search</Link>
              <Link to="/browse">Home</Link>
              <Link to="/collection">Your Music</Link>
              <h2>Recently Played</h2>
              <ul>
                <li>Unimagined</li>
                <li>Ground Dweller</li>
                <li>Before I Cave In</li>
              </ul>
            </nav>
          </header>
          <main>
            <button onClick={this.logOutAndRedirect}>Log Out</button>
            <Playlist
              tracks={this.state.tracklist}
            />
            <button onClick={this.getAlbum}>Get Album</button>
          </main>
        </div>
        <Player />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    state: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logOut: () => {
      dispatch(logOut())
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContent);
