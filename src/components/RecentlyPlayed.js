import React from 'react';

const RecentlyPlayed = ({albums}) => {
  return (
    albums.map(album => {
      return (
        <li key={album.id}>
          <div className="album-name">{ album.name }</div>
          <div className="album-type">{ album.type }</div>
        </li>
      );
    })
  );
}

export default RecentlyPlayed;