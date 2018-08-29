import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { saveAlbum } from '../actions/index';
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
      this.props.saveAlbum({
          artists: data.artists,
          id: data.id,
          name: data.name,
          images: data.images,
          type: data.album_type,
          releaseDate: data.release_date,
          tracklist: data.tracks.items
      });
      this.context.router.history.push('/playlist/null');
    });
  }

  render() {
    return (
      <div className="App-main">
        <main>
          This page is under construction. :p
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
    saveAlbum: (album) => {
      dispatch(saveAlbum(album))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContent);
