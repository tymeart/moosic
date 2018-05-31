import React from 'react';

const SearchResults = ({ results }) => {
  console.log(results)

  const firstFiveTracks = results.tracks.items.slice(0, 5).map(track => {
      return (
        <li key={track.id}>
          <div>{track.name}</div>
          <div>{track.artists[0].name}</div>
        </li>
      );
    }
  );

  return (
    <div className="SearchResults">
      <h2>Top Results</h2>
      <div className="top-results">
        <div className="top-results__playlist">
          <img 
            src={`${results.playlists.items[0].images[0].url}`} 
            alt={`Thumbnail for ${results.playlists.items[0].name} playlist`}  
          />
          <div className="top-results__playlist-details">
            <div className="top-results__playlist-details--name">{results.playlists.items[0].name}</div>
            <div className="top-results__playlist-details--owner">{results.playlists.items[0].owner.display_name}</div>
          </div>
        </div>

        <div className="top-results__tracks">
          <ul>
            {firstFiveTracks}
          </ul>
        </div>
      </div>

      <h2>Artists</h2>
      <div className="artist-results">
        <ul className="tilelist">
          {results.artists.items.map(artist => {
            return (
              <li
                className="tile"
                key={artist.id}
              >
                {/* <img
                  className="thumbnail"
                  alt={`Thumbnail for artist ${artist.name}`}
                  src={`${artist.images[0].url}`}
                /> */}
                {artist.name}
              </li>
            );
          })}
        </ul>
      </div>

      <h2>Albums</h2>
      <h2>Playlists</h2>
    </div>
  );
}

export default SearchResults;