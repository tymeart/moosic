import * as types from '../actions/actionTypes';

const initialState = {
  accessToken: '',
  isLoggedIn: false,
  categories: []
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
      }
    default:
      return initialState;
  }
};

export default userReducer;
