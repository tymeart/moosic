import * as types from '../actions/actionTypes';

const initialState = {
  accessToken: '',
  isLoggedIn: false,
  categories: [],
  currentlyPlayingSrc: '',
  isPlaying: false
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOG_IN:
      return {
        ...state,
        accessToken: action.token,
        isLoggedIn: true
      };
    case types.LOG_OUT:
      return {
        ...state,
        accessToken: '',
        isLoggedIn: false
      };
    case types.SAVE_CATEGORIES:
      return {
        ...state,
        categories: action.payload
      };
    case types.SAVE_SONG_SOURCE:
      return {
        ...state,
        currentlyPlayingSrc: action.payload
      };
    case types.TOGGLE_PLAY_STATUS:
      return {
        ...state,
        isPlaying: !state.isPlaying
      };
    default:
      return initialState;
  }
};

export default userReducer;
