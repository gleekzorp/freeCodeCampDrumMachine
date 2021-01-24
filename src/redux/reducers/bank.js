import { TOGGLE_BANK } from "../actionTypes";
import { bankOne, bankTwo } from "../state/soundBanks";

const initialState = {
  bankOne,
  bankTwo,
  whichBank: "bankTwo"
};

export default function (state = initialState, action) {
  switch (action.type) {
    case TOGGLE_BANK: {
      return {
        ...state,
        whichBank: state.whichBank === "bankOne" ? "bankTwo" : "bankOne"
      };
    }
    default:
      return state;
  }
}
