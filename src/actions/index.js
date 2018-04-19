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
