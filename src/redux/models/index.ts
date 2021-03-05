export interface UserModel {
  firstName: string;
  lastName: string;
  email: string;
}

export interface UserState {
  isLoading: boolean;
  user: UserModel | null;
  token: string;
}
