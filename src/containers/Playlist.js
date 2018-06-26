import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveSongInfo } from '../actions/index';
import '../styles/Playlist.css';

const convertTime = (ms) => {
  let sec = ms / 1000;
  let minutes = `${Math.trunc(sec / 60)}`;
  let seconds = (sec % 60) < 10 ?
    `0${Math.trunc(sec % 60)}` :
    `${Math.trunc(sec % 60)}`;
  return `${minutes}:${seconds}`;
}

class Playlist extends Component {
  render() {
    let listItems = this.props.tracks.map(track => {
      return (
        <li
          className="playlist-track"
          key={track.name}
          onClick={() => this.props.saveSongInfo(track, this.props.album)}
        >
          <div>
            <div className="playlist-track--title">{track.name}</div>
            <div className="playlist-track--additionalArtists">{track.artists.length > 1 && track.artists[1].name}</div>
          </div>
          <div className="playlist-track--duration">{convertTime(track.duration_ms)}</div>
        </li>
        );
      });

    return (
      <div className="Playlist">
        <ul>
          {listItems}
        </ul>
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
    saveSongInfo: (track, album) => {
      dispatch(saveSongInfo(track, album))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Playlist);
