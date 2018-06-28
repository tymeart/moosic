import * as types from './actionTypes';

export const logIn = (accessToken) => {
  return {
    type: types.LOG_IN,
    token: accessToken
  };
};

export const logOut = () => {
  return {
    type: types.LOG_OUT
  };
};

export const saveGenres = (genres) => {
  return {
    type: types.SAVE_GENRES,
    payload: genres
  };
};

export const saveFeaturedPlaylists = (playlists) => {
  return {
    type: types.SAVE_FEATURED_PLAYLISTS,
    payload: playlists
  };
};

export const saveNewReleases = (newreleases) => {
  return {
    type: types.SAVE_NEW_RELEASES,
    payload: newreleases
  };
};

export const getAlbum = (album) => {
  return {
    type: types.GET_ALBUM,
    payload: album
  };
};

export const saveSongInfo = (track, album) => {
  return {
    type: types.SAVE_SONG_INFO,
    payload: {
      track: track,
      album: album
    }
  };
}

export const togglePlayStatus = () => {
  return {
    type: types.TOGGLE_PLAY_STATUS
  };
}

export const updateSongProgress = (currentTimeDisplay, progressBarWidth) => {
  return {
    type: types.UPDATE_SONG_PROGRESS,
    payload: {
      currentTimeDisplay: currentTimeDisplay,
      progressBarWidth: progressBarWidth
    }
  };
}

export const updateSongDuration = (durationDisplay) => {
  return {
    type: types.UPDATE_SONG_DURATION,
    payload: {
      durationDisplay: durationDisplay
    }
  };
}
