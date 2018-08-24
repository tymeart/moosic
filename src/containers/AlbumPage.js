import React, { Fragment } from 'react';
import { FaMusic, FaPlay } from 'react-icons/lib/fa';

const convertTime = (ms) => {
  let sec = ms / 1000;
  let minutes = `${Math.trunc(sec / 60)}`;
  let seconds = (sec % 60) < 10 ?
    `0${Math.trunc(sec % 60)}` :
    `${Math.trunc(sec % 60)}`;
  return `${minutes}:${seconds}`;
}

const AlbumPage = ({ album, isPlaying, saveSongInfo, startSync, togglePlayStatus }) => {
  const handleTrackClick = (track, currentAlbum) => {
    saveSongInfo(track, currentAlbum);
    if (track.preview_url !== null && isPlaying === false) {
      togglePlayStatus();
      startSync();
    }
  }

  let tracks = album.tracklist.map(track => {
    return (
      <li
        className="playlist-track"
        key={track.id}
        onClick={() => handleTrackClick(track, {images: [album.images[2].url], name: album.name})}
      >
        <div className="playlist-track-left">
          <div className="playlist-track--playStatus">
            <FaMusic className="music-note" />
            <FaPlay className="play-icon" />
          </div>
          <div>
            <div className="playlist-track--title">{track.name}</div>
            <div className="playlist-track--artist-info">
              {track.artists.length > 1 && <div className="playlist-track--additionalArtists">{track.artists[1].name}</div> }
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
          <div className="album-details--other">{album.releaseDate.slice(0, 4)} &middot; {album.tracklist.length} songs</div>
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