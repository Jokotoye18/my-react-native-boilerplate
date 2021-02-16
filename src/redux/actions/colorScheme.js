import {SWITCH_COLOR_SCHEME} from "./types";

export const switchColorScheme = (scheme) => (dispatch) => {
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

export const x = () => {};
