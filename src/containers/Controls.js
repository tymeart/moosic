import React, { Component } from 'react';
import { connect } from 'react-redux';
import { togglePlayStatus } from '../actions/index';
import {
  FaPlayCircleO,
  FaPauseCircleO,
  FaStepBackward,
  FaStepForward
} from 'react-icons/lib/fa';

class Controls extends Component {
  togglePlayPause = () => {
    if (this.props.state.isPlaying) {
      this.props.pause();
      this.props.togglePlayStatus();
    } else {
      this.props.play();
      this.props.togglePlayStatus();
    }
  }

  render() {
    return (
      <div>
        <button><FaStepBackward title="Previous" /></button>
        <button onClick={this.togglePlayPause}>
          {this.props.state.isPlaying ? <FaPauseCircleO title="Pause" /> : <FaPlayCircleO title="Play" />}
        </button>
        <button><FaStepForward title="Next" /></button>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    state: state
  };
}

const mapDispatchToProps = dispatch => {
  return {
    togglePlayStatus: () => {
      dispatch(togglePlayStatus())
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
