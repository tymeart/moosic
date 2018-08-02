import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAlbum } from '../actions/index';
import '../styles/MainContent.css';

class MainContent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      album: null,
      tracklist: []
    }
  }

  static contextTypes = {
    router: PropTypes.object
  }

  fetchAlbum = () => {
    fetch('https://api.spotify.com/v1/albums/52fkHkIZ3QUHs90QuEGYDB',
      {
        headers: {
          'Authorization': `Bearer ${this.props.state.accessToken}`
        }
      })
    .then(res => res.json())
    .then(data => {
      // store album info in redux
      this.props.getAlbum({
          artists: data.artists,
          id: data.id,
          name: data.name,
          images: data.images,
          type: data.album_type,
          releaseDate: data.release_date,
          tracklist: data.tracks.items
      });
      this.context.router.history.push('/playlist');
    });
  }

  render() {
    return (
      <div className="App-main">
        <main>
          <button onClick={this.fetchAlbum}>Get Album</button>
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
    getAlbum: (album) => {
      dispatch(getAlbum(album))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContent);
