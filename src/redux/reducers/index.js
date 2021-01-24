import { combineReducers } from "redux";
import power from "./power";
import bank from "./bank";
import volume from "./volume";
import display from "./display";

export default combineReducers({ power, bank, volume, display });
