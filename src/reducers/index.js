import { combineReducers } from "redux";
import authReducer from "../login/reducer";
import lobbyReducer from "../lobby/reducer";

export default combineReducers({
  auth: authReducer,
  lobbyReducer: lobbyReducer
});
