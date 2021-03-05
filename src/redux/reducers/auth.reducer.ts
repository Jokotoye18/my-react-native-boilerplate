import {
  AuthActionTypes,
  AuthState,
} from "../actions/auth/types.action";

const initialState: AuthState = {
  isLoading: true,
  user: null,
  token: null,
};

export default (state = initialState, action: AuthActionTypes) => {
  switch (action.type) {
    case 'RESTORE_TOKEN':
      return {
        ...state,
        isLoading: false,
        token: action.payload,
      };
    case 'SIGNUP':
      return {
        ...state,
        isLoading: false,
        user: action.payload.user,
        token: action.payload.token,
      };
    case 'LOGIN':
      return {
        ...state,
        isLoading: false,
        user: action.payload.user,
        token: action.payload.token,
      };
    case 'LOGOUT':
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
