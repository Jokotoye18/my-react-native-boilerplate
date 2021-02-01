import {LOGIN, LOGOUT, SIGNUP} from '../actions/types';

const initialState = {
  isLoading: true,
  user: null,
  token: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP:
      return {
        ...state,
        isLoading: false,
        user: action.payload.user,
        token: action.payload.token,
      };
    case LOGIN:
      return {
        ...state,
        isLoading: false,
        user: action.payload.user,
        token: action.payload.token,
      };
    case LOGOUT:
      return {
        ...state,
        isLoading: false,
        user: null,
        token: null,
      };
    default:
      return state;
  }
};
