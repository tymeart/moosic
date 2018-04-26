import React, { Component } from 'react';
import { connect } from 'react-redux';
import { togglePlay } from '../actions/index';
import {
  FaPlayCircleO,
  FaPauseCircleO,
  FaStepBackward,
  FaStepForward
} from 'react-icons/lib/fa';

class Controls extends Component {
  isPlaying() {
    this.props.play();
    this.props.togglePlay();
  }

  render() {
    return (
      <div>
        <button><FaStepBackward title="Previous" /></button>
        <button onClick={this.isPlaying.bind(this)}>
          {this.props.state.isPlaying ? <FaPauseCircleO title="Pause"/> : <FaPlayCircleO title="Play" />}
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
    togglePlay: () => {
      dispatch(togglePlay())
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
