import React, { Component } from 'react';
import { connect } from 'react-redux';
import Controls from './Controls';
import { playTrack } from '../actions/index';

class Player extends Component {
  constructor(props) {
    super(props);

    this.audioEl = React.createRef();
  }

  playAudio() {
    this.audioEl.current.play();
  }

  render() {
    return (
      <div className="player center">
        <Controls play={this.playAudio.bind(this)}/>
        <audio id="audio" ref={this.audioEl}>
          <source
            src="https://p.scdn.co/mp3-preview/8cb264dcdf48b19123960729f5c0e07d6ba5d57b?cid=2d9beb2f5b9447cbb788d9ac8324eb8f"
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
