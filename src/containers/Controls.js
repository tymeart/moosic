import React, { Component } from 'react';
import { connect } from 'react-redux';
import { togglePlayStatus } from '../actions/index';
import {
  FaPlayCircleO,
  FaPauseCircleO,
  FaStepBackward,
  FaStepForward
} from 'react-icons/lib/fa';
import '../styles/Controls.css';

class Controls extends Component {
  render() {
    return (
      <div className="Controls">
        <div className="Controls-buttons">
          <button><FaStepBackward title="Previous" /></button>
          <button className="play-pause" onClick={this.props.togglePlayPause}>
            {this.props.state.isPlaying ? <FaPauseCircleO title="Pause" /> : <FaPlayCircleO title="Play" />}
          </button>
          <button><FaStepForward title="Next" /></button>
        </div>

        <div className="Controls-progress">
          <p className="progress-time">{this.props.currentTimeDisplay}</p>
          <div className="progress-bar">
            <div
              className="progress-bar-completed"
              style={{
                width: this.props.progressBarWidth
              }}
            >
            </div>
          </div>
          <p className="progress-time-total">{this.props.durationDisplay}</p>
        </div>
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
