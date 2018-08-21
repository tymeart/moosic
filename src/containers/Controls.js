import React, { Component } from 'react';
import { connect } from 'react-redux';
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
          <p className="progress-time">{this.props.state.playerCurrentTimeDisplay}</p>
          <div className="progress-bar">
            <div
              className="progress-bar-completed"
              style={{
                width: this.props.state.playerProgressBarWidth
              }}
            >
            </div>
          </div>
          <p className="progress-time-total">{this.props.state.playerDurationDisplay}</p>
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

export default connect(mapStateToProps)(Controls);
