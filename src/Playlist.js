import React from 'react';


let Playlist = () => {
  let songs = ['Sympathy', 'Introduced Species', 'Mirrors', 'Same Soul'];
  let listItems = songs.map(song => <li key={song}>{song}</li>);
  return (
    <div className="center">
      <ul>
        {listItems}
      </ul>
    </div>
  );
}

export default Playlist;
