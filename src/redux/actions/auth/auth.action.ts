// import axios from 'axios';
import {Dispatch} from "react";
import {AuthActionTypes, User} from "./types.action";

export const getUser = (token: string | null) => (
  dispatch: Dispatch<AuthActionTypes>
) => {
  dispatch({
    type: "RESTORE_TOKEN",
    payload: token,
  });
};

export const signup = (user: User) => (
  dispatch: Dispatch<AuthActionTypes>
) => {
  dispatch({
    type: "SIGNUP",
    payload: {
      user: user,
      token: "1234567890",
    },
  });
};

export const login = (user: User) => (
  dispatch: Dispatch<AuthActionTypes>
) => {
  dispatch({
    type: "LOGIN",
    payload: {
      user: user,
      token: "1234567890",
    },
  });
};
export const logout = () => (dispatch: Dispatch<AuthActionTypes>) => {
  dispatch({
    type: "LOGOUT",
  });
};
