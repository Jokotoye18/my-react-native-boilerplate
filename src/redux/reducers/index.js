import {combineReducers} from "redux";
import auth from "./auth";
import colorScheme from './colorScheme'

export default combineReducers({
  auth,
  colorScheme,
});
