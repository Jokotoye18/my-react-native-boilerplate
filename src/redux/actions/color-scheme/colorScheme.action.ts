import {Dispatch} from "react";
import {
  SWITCH_COLOR_SCHEME,
  ColorSchemeActionTypes,
  ColorSchemeState,
} from "./types.action";

export const switchColorScheme = (scheme: string) => (
  dispatch: Dispatch<ColorSchemeActionTypes>
) => {
  if (scheme === "light") {
    dispatch({
      type: SWITCH_COLOR_SCHEME,
      scheme: "dark",
    });
  } else {
    dispatch({
      type: SWITCH_COLOR_SCHEME,
      scheme: "light",
    });
  }
};
