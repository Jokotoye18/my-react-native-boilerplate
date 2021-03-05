import {Appearance} from "react-native";
import {
  SWITCH_COLOR_SCHEME,
  ColorSchemeState,
  ColorSchemeActionTypes,
} from "../actions/color-scheme/types.action";

const initialState: ColorSchemeState = {
  scheme: `${Appearance.getColorScheme()}`,
};

export default (
  state = initialState,
  action: ColorSchemeActionTypes
) => {
  switch (action.type) {
    case SWITCH_COLOR_SCHEME:
      return {
        scheme: action.scheme,
      };
    default:
      return state;
  }
};
