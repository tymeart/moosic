import React from 'react';

const Player = (src) => {
  return (
    <div className="player center">
      <audio controls="controls">
        <source src="foo.wav" type="audio/wav" />
        Your browser does not support the <code>audio</code> element.
      </audio>
    </div>
  );
}

export default Player;