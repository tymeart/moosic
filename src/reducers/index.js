import * as types from '../actions/actionTypes';

const initialState = {
  accessToken: '',
  isLoggedIn: false
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
    default:
      return initialState;
  }
};

export default userReducer;
