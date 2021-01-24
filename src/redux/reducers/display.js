import { CHANGE_DISPLAY } from "../actionTypes";

const initialState = {
  displayValue: "Please Click A Button"
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CHANGE_DISPLAY: {
      return {
        ...state,
        displayValue: action.payload.newDisplayValue
      };
    }
    default:
      return state;
  }
}
