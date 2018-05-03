import React, { Component } from 'react';
import { connect } from 'react-redux';
import Controls from './Controls';
import { togglePlayStatus } from '../actions/index';

class Player extends Component {
  constructor(props) {
    super(props);

    this.audioEl = React.createRef();
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
    togglePlayStatus: () => {
      dispatch(togglePlayStatus())
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
