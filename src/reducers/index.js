import { combineReducers } from "redux";
import signUpReducer from "../signup/reducer";
import loginReducer from "../login/reducer";
import lobbyReducer from "../lobby/reducer";

export default combineReducers({
  signUpReducer: signUpReducer,
  loginReducer: loginReducer,
  lobbyReducer: lobbyReducer
});
