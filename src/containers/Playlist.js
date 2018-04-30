import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveSongSrc } from '../actions/index';

class Playlist extends Component {
  render() {
    let listItems = this.props.tracks.map(track => {
      return (
        <li
          key={track.name}
          onClick={() => this.props.saveSongSrc(track.preview_url)}
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
    saveSongSrc: (songSrc) => {
      dispatch(saveSongSrc(songSrc))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Playlist);
