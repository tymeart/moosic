import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Playlist from './Playlist';
import { logOut } from '../actions/index';
import '../styles/MainContent.css';

class MainContent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      album: {
        artists: [],
        id: '',
        name: '',
        images: [],
        type: '',
        releaseDate: ''
      },
      tracklist: []
    }
  }

  static contextTypes = {
    router: PropTypes.object
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
    .then(data => {
      this.setState({
        album: {
          artists: data.artists,
          id: data.id,
          name: data.name,
          images: data.images,
          type: data.album_type,
          releaseDate: data.release_date
        },
        tracklist: data.tracks.items
      });
    });
  }

  render() {
    return (
      <div className="App-main">
        <main>
          <button onClick={this.logOutAndRedirect}>Log Out</button>
          <Playlist
            album={this.state.album}
            tracks={this.state.tracklist}
          />
          <button onClick={this.getAlbum}>Get Album</button>
        </main>
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
