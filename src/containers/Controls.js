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
  render() {
    return (
      <div>
        <button><FaStepBackward title="Previous" /></button>
        <button onClick={this.props.togglePlayPause}>
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
