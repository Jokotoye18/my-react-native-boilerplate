import {Appearance} from "react-native";
import {SWITCH_COLOR_SCHEME} from "../actions/types";

const initialState = {
  scheme: Appearance.getColorScheme(),
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SWITCH_COLOR_SCHEME:
      return {
        scheme: action.scheme,
      };
    default:
      return state;
  }
};
