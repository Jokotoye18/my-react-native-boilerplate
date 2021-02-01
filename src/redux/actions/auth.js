import axios from 'axios';
import {LOGIN, LOGOUT, SIGNUP} from './types';

export const signup = (signupData) => (dispatch) => {
  dispatch({
    type: SIGNUP,
    payload: {
      user: 'Ademola',
      token: '1234567890',
    },
  });
};
export const login = (signupData) => (dispatch) => {
  dispatch({
    type: LOGIN,
    payload: {
      user: 'Ademola',
      token: '1234567890',
    },
  });
};
export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};
