import {
  TOGGLE_POWER,
  TOGGLE_BANK,
  CHANGE_VOLUME,
  CHANGE_DISPLAY
} from "./actionTypes";

export const togglePower = () => ({
  type: TOGGLE_POWER
});

export const toggleBank = () => ({
  type: TOGGLE_BANK
});

export const changeVolume = (newVolumeValue) => ({
  type: CHANGE_VOLUME,
  payload: { newVolumeValue }
});

export const changeDisplay = (newDisplayValue) => ({
  type: CHANGE_DISPLAY,
  payload: { newDisplayValue }
});
