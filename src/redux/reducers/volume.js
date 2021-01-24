import { CHANGE_VOLUME } from "../actionTypes";

const initialState = {
  currentVolume: 0.5
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CHANGE_VOLUME: {
      return {
        ...state,
        currentVolume: action.payload.newVolumeValue
      };
    }
    default:
      return state;
  }
}
