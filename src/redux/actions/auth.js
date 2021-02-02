// import axios from 'axios';
import {RESTORE_TOKEN, LOGIN, LOGOUT, SIGNUP} from "./types";

export const getUser = (token) => (dispatch) => {
  dispatch({
    type: RESTORE_TOKEN,
    payload: token,
  });
};

export const signup = () => (dispatch) => {
  dispatch({
    type: SIGNUP,
    payload: {
      user: "Ademola",
      token: "1234567890",
    },
  });
};

export const login = () => (dispatch) => {
  dispatch({
    type: LOGIN,
    payload: {
      user: "Ademola",
      token: "1234567890",
    },
  });
};
export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};
