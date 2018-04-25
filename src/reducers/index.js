import * as types from '../actions/actionTypes';

const initialState = {
  accessToken: '',
  isLoggedIn: false,
  categories: [],
  currentlyPlaying: ''
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
    case types.PLAY_TRACK:
      return {
        ...state,
        currentlyPlaying: action.payload
      };
    default:
      return initialState;
  }
};

export default userReducer;
