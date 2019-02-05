import { combineReducers } from "redux";
import login from "./login";
import user from "./user";
import score from "./score";
import event from "./event";
import repas from "./repas";
import notif from "./notif";
export default combineReducers({
  login,
  user,
  score,
  event,
  repas,
  notif
});
