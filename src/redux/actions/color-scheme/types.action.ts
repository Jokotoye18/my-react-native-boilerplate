export const SWITCH_COLOR_SCHEME = "SWITCH_COLOR_SCHEME";

export interface ColorSchemeState {
  scheme: string;
}

interface SwitchColorAction {
  type: typeof SWITCH_COLOR_SCHEME;
  scheme: string;
}

export type ColorSchemeActionTypes = SwitchColorAction;
