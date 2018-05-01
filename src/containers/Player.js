import React, { Component } from 'react';
import { connect } from 'react-redux';
import Controls from './Controls';
import { saveSongSrc, togglePlayStatus } from '../actions/index';

class Player extends Component {
  constructor(props) {
    super(props);

    this.audioEl = React.createRef();
  }

  togglePlayPause = () => {
    this.audioEl.current.load();
    this.fetchAudioAndPlay();
  }

  fetchAudioAndPlay() {
    fetch(this.props.state.currentlyPlayingSrc)
    .then(res => {
      this.audioEl.current.src = res.url;
      return this.audioEl.current.play();
      })
    .then(_ => {
      // Audio playback started
      if (this.props.state.isPlaying) {
        this.audioEl.current.pause();
        this.props.togglePlayStatus();
      } else {
        this.audioEl.current.play();
        this.props.togglePlayStatus();
      }
      })
    .catch(e => {
      console.log(e);
    })
  }

  render() {
    return (
      <div className="player center">
        <Controls
          togglePlayPause={this.togglePlayPause}
        />
        <audio
          id="audio"
          ref={this.audioEl}
          src={this.props.state.currentlyPlayingSrc}
        >
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
    saveSongSrc: (songSrc) => {
      dispatch(saveSongSrc(songSrc))
    },
    togglePlayStatus: () => {
      dispatch(togglePlayStatus())
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
