import React from 'react';


const Playlist = (props) => {
  let songs = ['Sympathy', 'Introduced Species', 'Mirrors', 'Same Soul'];
  let listItems = songs.map(song => {
    return (
      <li
        key={song}
        onClick={props.onSongClick}
      >
        {song}
      </li>
    );
  });

  return (
    <div className="center">
      <ul>
        {listItems}
      </ul>
    </div>
  );
}

export default Playlist;
