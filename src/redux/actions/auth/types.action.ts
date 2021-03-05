export const RESTORE_TOKEN = "RESTORE_TOKEN";
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const SIGNUP = "SIGNUP";

export interface User {
  firstName: string;
  lastName: string;
  email: string;
}

export interface AuthState {
  isLoading: boolean;
  user: User | null;
  token: string | null;
}

interface RestoreTokenAction {
  readonly type: typeof RESTORE_TOKEN;
  payload: string | null;
}

interface LoginAction {
  readonly type: typeof LOGIN;
  payload: {
    user: User;
    token: string;
  };
}

interface SignupAction {
  readonly type: typeof SIGNUP;
  payload: {
    user: User;
    token: string;
  };
}

interface LogoutAction {
  readonly type: typeof LOGOUT;
}

export type AuthActionTypes =
  | RestoreTokenAction
  | SignupAction
  | LoginAction
  | LogoutAction;
