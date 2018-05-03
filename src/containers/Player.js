import React, { Component } from 'react';
import { connect } from 'react-redux';
import Controls from './Controls';
import { togglePlayStatus } from '../actions/index';

class Player extends Component {
  constructor(props) {
    super(props);

    this.audioEl = React.createRef();

    this.state = {
      duration: '0:00',
      currentTime: '0:00'
    }
  }

  componentDidMount() {
    this.audioEl.current.addEventListener('timeupdate', () => {
      this.formatTime(this.audioEl.current.currentTime);
    });
  }

  togglePlayPause = () => {
    let playPromise = this.audioEl.current.play();
    if (playPromise !== undefined) {
      playPromise.then(_ => {
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

  formatTime(sec) {
    let minutes = `${Math.trunc(sec / 60)}`;
    let seconds = sec < 10 ?
      `0${Math.trunc(sec % 60)}` :
      `${Math.trunc(sec % 60)}`;
    this.setState({currentTime: `${minutes}:${seconds}`});
  }

  render() {
    return (
      <div className="player center">
        <Controls
          togglePlayPause={this.togglePlayPause}
          duration={this.state.duration}
          currentTime={this.state.currentTime}
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
    togglePlayStatus: () => {
      dispatch(togglePlayStatus())
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
