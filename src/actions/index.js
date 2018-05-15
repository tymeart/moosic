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

export const saveCategories = (categories) => {
  return {
    type: types.SAVE_CATEGORIES,
    payload: categories
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
