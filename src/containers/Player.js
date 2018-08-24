import React, { Component } from 'react';
import { connect } from 'react-redux';
import Controls from './Controls';
import { endStartSync, togglePlayStatus, updateSongProgress, updateSongDuration } from '../actions/index';
import '../styles/Player.css';

class Player extends Component {
  constructor(props) {
    super(props);

    this.audioEl = React.createRef();
  }

  componentDidMount() {
    this.audioEl.current.addEventListener('timeupdate', () => {
      let currentTimeToDisplay = this.formatTime(this.audioEl.current.currentTime);
      let progressRatio = this.audioEl.current.currentTime / this.audioEl.current.duration;
      this.props.updateSongProgress(currentTimeToDisplay, `${progressRatio * 400}px`);
    });
  }

  componentDidUpdate() {
    // track was clicked on
    if (this.props.state.startSync) {
      if (this.props.state.currentlyPlayingSrc === null) {
        this.props.endStartSync();
      } else {
        // start playing
        this.togglePlayPause();
        // toggle off so they don't interupt playback
        this.props.togglePlayStatus();
        this.props.endStartSync();
      }
    }
  }

  togglePlayPause = () => {
    if (this.props.state.currentlyPlayingSrc !== null) {
      let playPromise = this.audioEl.current.play();
      if (playPromise !== undefined) {
        playPromise.then(_ => {
          if (!isNaN(this.audioEl.current.duration)) {
            this.props.updateSongDuration(this.formatTime(this.audioEl.current.duration));
          }
          if (this.props.state.isPlaying) {
            this.audioEl.current.pause();
            this.props.togglePlayStatus();
          } else {
            this.audioEl.current.play();
            this.props.togglePlayStatus();
          }
          })
        .catch(e => console.log(e));
      }
    }
  }

  formatTime(sec) {
    let minutes = `${Math.trunc(sec / 60)}`;
    let seconds = sec < 10 ?
      `0${Math.trunc(sec % 60)}` :
      `${Math.trunc(sec % 60)}`;
    return `${minutes}:${seconds}`;
  }

  render() {
    let artistsList = '';
    const { currentlyPlayingTrack, currentlyPlayingAlbum } = this.props.state;

    if (currentlyPlayingTrack) {
      artistsList = `${currentlyPlayingTrack.artists[0].name}`;
      if (currentlyPlayingTrack.artists.length > 1) {
        for (let i = 1; i < currentlyPlayingTrack.artists.length; i++) {
          artistsList += `, ${currentlyPlayingTrack.artists[i].name}`
        }
      }
    }

    return (
      <div className="player">
        <div className="currently-playing-container">
          {currentlyPlayingAlbum &&
            <span>
              <img
              src={currentlyPlayingAlbum.images[0]}
                alt={`Cover art for ${currentlyPlayingAlbum.name}`}
              />
              <div className="currently-playing-info">
                <p className="currently-playing-title truncate">{currentlyPlayingTrack.name}</p>
                <p className="currently-playing-artist truncate">{artistsList}</p>
              </div>
            </span>
          }
        </div>
        <Controls
          togglePlayPause={this.togglePlayPause}
        />
        <audio
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
    endStartSync: () => {
      dispatch(endStartSync())
    },
    togglePlayStatus: () => {
      dispatch(togglePlayStatus())
    },
    updateSongProgress: (currentTimeDisplay, progressBarWidth) => {
      dispatch(updateSongProgress(currentTimeDisplay, progressBarWidth))
    },
    updateSongDuration: (durationDisplay) => {
      dispatch(updateSongDuration(durationDisplay))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
