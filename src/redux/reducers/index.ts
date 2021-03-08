import {combineReducers} from "redux";
import auth from "./auth.reducer";
import colorScheme from "./colorScheme.reducer";

export const rootReducer = combineReducers({
  auth,
  colorScheme,
});

export type AppState = ReturnType<typeof rootReducer>;
