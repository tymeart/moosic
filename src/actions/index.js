import * as types from './actionTypes';

export const logIn = (accessToken) => {
  return {
    type: types.LOG_IN,
    token: accessToken
  };
};
