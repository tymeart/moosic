import React, { Fragment } from 'react';
import { FaMusic, FaPlay } from 'react-icons/lib/fa';
import { convertTime } from '../utilities/convertTime';
import { listify } from '../utilities/listify';

const AlbumPage = ({ album, isPlaying, saveSongInfo, startSync, togglePlayStatus, updateRecentlyPlayed }) => {
  const handleTrackClick = (track, currentAlbum) => {
    saveSongInfo(track, currentAlbum);
    if (track.preview_url !== null && isPlaying === false) {
      togglePlayStatus();
      startSync();
    }

    updateRecentlyPlayed(currentAlbum);
  }

  let tracks = album.tracklist.map(track => {
    return (
      <li
        className="playlist-track"
        key={track.id}
        onClick={() => 
          handleTrackClick(
            track, 
            {
              id: album.id,
              images: [album.images[2].url], 
              name: album.name,
              type: album.type
            }
          )}
      >
        <div className="playlist-track-left">
          <div className="playlist-track--playStatus">
            <FaMusic className="music-note" />
            <FaPlay className="play-icon" />
          </div>
          <div className="truncate">
            <div className="playlist-track--title truncate">{track.name}</div>
            <div className="playlist-track--artist-info truncate">
              {track.artists.length > 1 && <div className="playlist-track--additionalArtists">{listify(track.artists.slice(1))}</div> }
            </div>
          </div>
        </div>
        <div className="playlist-track--duration">{convertTime(track.duration_ms)}</div>
      </li>
    );
  });

  return (
    <div className="album-wrapper">
      <div className="album-details">
        <Fragment>
          <img src={`${album.images[0].url}`} alt={`Thumbnail for ${album.name}`} />
          <div className="album-details--title">{album.name}</div>
          <div className="album-details--artist">{album.artists[0].name}</div>
          <div className="album-details--other">{album.releaseDate.slice(0, 4)} &middot; {album.tracklist.length} {album.tracklist.length === 1 ? 'song' : 'songs'}</div>
        </Fragment>
      </div>

      <div className="Playlist">
        <ul>
          {tracks}
        </ul>
      </div>
    </div>
  );
}

export default AlbumPage;