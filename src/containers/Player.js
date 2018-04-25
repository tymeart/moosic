import React, { Component } from 'react';
import { connect } from 'react-redux';
import { playTrack } from '../actions/index';

class Player extends Component {
  render() {
    return (
      <div className="player center">
        <audio controls="controls">
          <source
            src={this.props ? this.props.state.currentlyPlaying : ''}
            type="audio/mp3"
          />
          Your browser does not support the <code>audio</code> element.
        </audio>
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
    playTrack: (songSrc) => {
      dispatch(playTrack(songSrc))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
