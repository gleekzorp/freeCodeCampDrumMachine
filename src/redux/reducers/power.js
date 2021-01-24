import { TOGGLE_POWER } from "../actionTypes";

const initialState = {
  off: true
};

export default function (state = initialState, action) {
  switch (action.type) {
    case TOGGLE_POWER: {
      return {
        ...state,
        off: !state.off
      };
    }
    default:
      return state;
  }
}
