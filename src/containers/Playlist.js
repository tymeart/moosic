import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { saveSongInfo, saveAlbum, savePlaylist } from '../actions/index';
import AlbumPage from './AlbumPage';
import PlaylistPage from './PlaylistPage';
import '../styles/Playlist.css';

let url = '';

class Playlist extends Component {
  constructor(props) {
    super(props);
    
    const params = this.props.match.params;
    switch (params.type) {
      case 'genres':
        url = `https://api.spotify.com/v1/users/${this.props.location.state.ownerId}/playlists/${params.id}/tracks`;
        break;
      case 'featured':
        url =`https://api.spotify.com/v1/users/spotify/playlists/${params.id}/tracks`;
        break;
      case 'newreleases':
        url = `https://api.spotify.com/v1/albums/${params.id}`;
        break;
      default:
        url = '';
        break;
    }
  }
  
  componentDidMount() {
    fetch(url,
      {
        headers: {
          'Authorization': `Bearer ${this.props.state.accessToken}`
        }
      })
      .then(res => res.json())
      .then(data => {
        console.log('album data: ', data);
        if (this.props.match.params.type === 'newreleases') {
          this.props.saveAlbum({
            artists: data.artists,
            id: data.id,
            name: data.name,
            images: data.images,
            type: data.album_type,
            releaseDate: data.release_date,
            tracklist: data.tracks.items
          });
        } else if (this.props.match.params.type === 'genres' || 'featured') {
          this.props.savePlaylist({
            owner: this.props.location.state.ownerName,
            id: this.props.match.params.id,
            name: this.props.location.state.playlistName,
            image: this.props.location.state.thumbnail,
            type: 'playlist',
            tracklist: data.items
          });
        }
        
      });
  }

  render() {
    return (
      <Fragment>
        {this.props.state.playlist && <PlaylistPage playlist={this.props.state.playlist} />}
        {this.props.state.album && <AlbumPage album={this.props.state.album} /> }
      </Fragment>
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
    saveSongInfo: (track, album) => {
      dispatch(saveSongInfo(track, album))
    },
    saveAlbum: album => {
      dispatch(saveAlbum(album))
    },
    savePlaylist: playlist => {
      dispatch(savePlaylist(playlist))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Playlist);
