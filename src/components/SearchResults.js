import React from 'react';

const SearchResults = ({ results }) => {
  console.log(results)

  console.log(results.artists.items[1])

  const convertTime = (ms) => {
    let sec = ms / 1000;
    let minutes = `${Math.trunc(sec / 60)}`;
    let seconds = (sec % 60) < 10 ?
      `0${Math.trunc(sec % 60)}` :
      `${Math.trunc(sec % 60)}`;
    return `${minutes}:${seconds}`;
  }

  const firstFiveTracks = results.tracks.items.slice(0, 5).map(track => {
      return (
        <li key={track.id}>
          <div>
            <div className="top-results__tracks--name">{track.name}</div>
            <div className="top-results__tracks--artist">{track.artists[0].name}</div>
          </div>
          <div className="top-results__tracks--duration">{convertTime(track.duration_ms)}</div>
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
          {results.artists.items.filter(artist => {
            return (
              (artist.images.length !== 0) && 
              (artist.images[0].height === artist.images[0].width)
            );
          }).map(artist => {
              return (
                <li
                  className="tile"
                  key={artist.id}
                >
                  <img
                    className="thumbnail"
                    alt={`Thumbnail for artist ${artist.name}`}
                    src={`${artist.images[0].url}`}
                  />
                  {artist.name}
                </li>
              );
            })}
        </ul>
      </div>

      <h2>Albums</h2>
      <div className="albums-results">
        <ul className="tilelist">
          {results.albums.items.filter(album => {
            return (
              (album.images.length !== 0) && 
              (album.images[0].height === album.images[0].width)
            );
          })
            .slice(0, 12)
            .map(album => {
            return (
              <li
                className="tile"
                key={album.id}
              >
                <img
                  className="thumbnail"
                  alt={`Thumbnail for album ${album.name}`}
                  src={`${album.images[0].url}`}
                />
                <div className="albums-results__album">{album.name}</div>
                <div className="albums-results__artist">{album.artists[0].name}</div>
              </li>
            );
          })}
        </ul>
      </div>

      <h2>Playlists</h2>
      <div className="playlists-results">
        <ul className="tilelist">
          {results.playlists.items.filter(playlist => {
            return (
              (playlist.images.length !== 0) &&
              (playlist.images[0].height === playlist.images[0].width) && 
              (playlist.owner.display_name !== null)
            );
          })
            .slice(0, 12)
            .map(playlist => {
            return (
              <li
                className="tile"
                key={playlist.id}
              >
                <img
                  className="thumbnail"
                  alt={`Thumbnail for playlist ${playlist.name}`}
                  src={`${playlist.images[0].url}`}
                />
                <div className="playlists-results__playlist">{playlist.name}</div>
                <div className="playlists-results__owner">{playlist.owner.display_name}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default SearchResults;