import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveSongInfo } from '../actions/index';

class Playlist extends Component {
  render() {
    let listItems = this.props.tracks.map(track => {
      return (
        <li
          key={track.name}
          onClick={() => this.props.saveSongInfo(track, this.props.album)}
        >
          {track.name}
        </li>
        );
      });

    return (
      <div className="center">
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
