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

const PlaylistPage = ({ playlist, isPlaying, saveSongInfo, startSync, togglePlayStatus }) => {
  const handleTrackClick = (track, currentPlaylist) => {
    saveSongInfo(track, currentPlaylist);
    if (track.preview_url !== null) {
      startSync();
      if (isPlaying === false) {
        togglePlayStatus();
      }
    }
  }

  let tracks = playlist.tracklist.map(track => {
    return (
      <li
        className="playlist-track"
        key={track.track.id}
        onClick={() => handleTrackClick(track.track, {images: [playlist.image], name: playlist.name})}
      >
        <div className="playlist-track-left">
          <div className="playlist-track--playStatus">
            <FaMusic className="music-note" />
            <FaPlay className="play-icon" />
          </div>
          <div>
            <div className="playlist-track--title">{track.track.name}</div>
            <div className="playlist-track--artist-info">
              {track.track.artists[0].name && <div className="playlist-track--artist">{track.track.artists[0].name} </div>}
              {track.track.artists.length > 1 && <span className="">&middot;</span>}
              {track.track.artists.length > 1 && <div className="playlist-track--additionalArtists">{track.track.artists[1].name}</div>}
            </div>
          </div>
        </div>
        <div className="playlist-track--duration">{convertTime(track.track.duration_ms)}</div>
      </li>
    );
  });

  return (
    <div className="playlist-wrapper">
      <div className="playlist-details">
        <Fragment>
          <img src={playlist.image} alt={`Thumbnail for ${playlist.name}`} />
          <div className="playlist-details--title">{playlist.name}</div>
          <div className="playlist-details--owner">{playlist.owner}</div>
          <div className="playlist-details--other">{playlist.tracklist.length} {playlist.tracklist.length === 1 ? 'song' : 'songs'}</div>
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

export default PlaylistPage;