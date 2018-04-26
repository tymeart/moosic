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

export const playTrack = (songSrc) => {
  return {
    type: types.PLAY_TRACK,
    payload: songSrc
  };
}

export const togglePlay = () => {
  return {
    type: types.TOGGLE_PLAY
  };
}
