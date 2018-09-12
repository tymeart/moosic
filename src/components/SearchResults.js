import React from 'react';
import { withRouter } from 'react-router-dom';
import { FaMusic, FaPlay } from 'react-icons/lib/fa';
import { MdPlayCircleOutline } from 'react-icons/lib/md';

const SearchResults = withRouter(({ results, isPlaying, saveSongInfo, startSync, togglePlayStatus, history }) => {
  console.log(results)

  console.log(results.artists.items)

  const convertTime = (ms) => {
    let sec = ms / 1000;
    let minutes = `${Math.trunc(sec / 60)}`;
    let seconds = (sec % 60) < 10 ?
      `0${Math.trunc(sec % 60)}` :
      `${Math.trunc(sec % 60)}`;
    return `${minutes}:${seconds}`;
  }

  const handleTrackClick = (track, currentPlaylist) => {
    saveSongInfo(track, currentPlaylist);
    if (track.preview_url !== null) {
      startSync();
      if (isPlaying === false) {
        togglePlayStatus();
      }
    }
  }

  const firstFiveTracks = results.tracks.items.slice(0, 5).map(track => {
      return (
        <li 
          className="top-result-track"
          key={track.id}
          onClick={() => handleTrackClick(track, { images: [track.album.images[0].url], name: track.name })}  
        >
          <div className="top-results__tracks-left">
            <div className="top-results__tracks--playStatus">
              <FaMusic className="music-note" />
              <FaPlay className="play-icon" />
            </div>
            <div>
              <div className="top-results__tracks--name">{track.name}</div>
              <div className="top-results__tracks--artist-info">
                <div className="top-results__tracks--artist">{track.artists[0].name}</div>
                <span>&middot;</span>
                <div className="top-results__tracks--album">{track.album.name}</div>
              </div>
            </div>
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
          <div 
            className="thumbnail large"
            onClick={() => {
              history.push(`/playlist/featured/${results.playlists.items[0].id}`,
                {
                  ownerId: results.playlists.items[0].owner.id,
                  ownerName: results.playlists.items[0].owner.display_name,
                  playlistName: results.playlists.items[0].name,
                  thumbnail: results.playlists.items[0].images[0].url
                })
            }}  
          >
            <img 
              src={`${results.playlists.items[0].images[0].url}`} 
              alt={`Thumbnail for ${results.playlists.items[0].name} playlist`}
            />
            <div className="overlay"><MdPlayCircleOutline /></div>
          </div>
          <div className="top-results__playlist-details">
            <div 
              className="top-results__playlist-details--name"
              onClick={() => {
                history.push(`/playlist/featured/${results.playlists.items[0].id}`,
                  {
                    ownerId: results.playlists.items[0].owner.id,
                    ownerName: results.playlists.items[0].owner.display_name,
                    playlistName: results.playlists.items[0].name,
                    thumbnail: results.playlists.items[0].images[0].url
                  })
              }}
            >
              {results.playlists.items[0].name}
            </div>
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
          })
            .slice(0, 12)
            .map(artist => {
              return (
                <li
                  className="tile"
                  key={artist.id}
                >
                  <div className="thumbnail circle">
                    <img
                      className="artist thumbnail"
                      alt={`Thumbnail for artist ${artist.name}`}
                      src={`${artist.images[0].url}`}
                    />
                    <div className="overlay"></div>
                  </div>
                  <div className="artist-results__artist">{artist.name}</div>
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
                <div
                  className="thumbnail"
                  onClick={() => { history.push(`/playlist/newreleases/${album.id}`) }}
                >
                  <img
                    alt={`Thumbnail for album ${album.name}`}
                    src={`${album.images[0].url}`}
                  />
                  <div className="overlay"><MdPlayCircleOutline /></div>
                </div>
                <div 
                  className="albums-results__album"
                  onClick={() => { history.push(`/playlist/newreleases/${album.id}`) }}
                >
                  {album.name}
                </div>
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
                <div
                  className="thumbnail"
                  onClick={() => {
                    history.push(`/playlist/featured/${playlist.id}`,
                      {
                        ownerId: playlist.owner.id,
                        ownerName: playlist.owner.display_name,
                        playlistName: playlist.name,
                        thumbnail: playlist.images[0].url
                      })
                  }}
                >
                  <img
                    alt={`Thumbnail for playlist ${playlist.name}`}
                    src={`${playlist.images[0].url}`}
                  />
                  <div className="overlay"><MdPlayCircleOutline /></div>
                </div>
                <div 
                  className="playlists-results__playlist"
                  onClick={() => {
                    history.push(`/playlist/featured/${playlist.id}`,
                      {
                        ownerId: playlist.owner.id,
                        ownerName: playlist.owner.display_name,
                        playlistName: playlist.name,
                        thumbnail: playlist.images[0].url
                      })
                  }}
                >
                  {playlist.name}
                </div>
                <div className="playlists-results__owner">{playlist.owner.display_name}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
});

export default SearchResults;